import path from "node:path";
import { pool } from "../lib/db.js";
import fs from "node:fs";
import { logger } from "../lib/logger.js";


const MIGRATION_DIR=path.join(process.cwd(),'migrations');

const CREATE_MIGRATIONS_TABLE_SQL = `CREATE TABLE IF NOT EXISTS migrations (
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL UNIQUE,
executed_at TIMESTAMP NOT NULL DEFAULT NOW()
)`;

type MigrationRow={
    name:string;
};

async function getExecutedMigrations(): Promise<string[]> {
    try {
        const result=await pool.query<MigrationRow>('SELECT name FROM migrations ORDER BY name ASC');
        return result.rows.map((row:MigrationRow)=>row.name);
    } catch (error) {
        console.error('Error getting executed migrations:',error);
        throw error;
    }
}

function getMigrationFiles():string[]{
    return fs.readdirSync(MIGRATION_DIR)
    .filter((file)=>file.endsWith('.sql'))
    .sort();
}

async function runMigration(fileName:string): Promise<void>{
    const sql=await fs.readFileSync(path.join(MIGRATION_DIR,fileName));
    const client= await pool.connect();
    try{
       await client.query('BEGIN');
        await client.query(sql.toString());
        await client.query('INSERT INTO migrations (name) VALUES ($1)',[fileName]);
        await client.query('COMMIT');
        logger.info(`Migration ${fileName} completed successfully`);
    }catch(error){
       await client.query('ROLLBACK');
        logger.error(`Migration ${fileName} failed ${error}`);
        throw error;
    }
    finally{
        client.release();
    }
}

async function migrate(): Promise<void> {
    try{
        await pool.query(CREATE_MIGRATIONS_TABLE_SQL);
        // const migrationFiles=await fs.readdir(MIGRATION_DIR);

        // console.log('Running migrations in',MIGRATION_DIR);

        const executed= new Set( await getExecutedMigrations());

        const pending=getMigrationFiles().filter((file)=>(!executed.has(file)));
        if(pending.length === 0){
            console.log('No pending migrations to run.');
            return;
        }

        console.log(`Running ${pending.length} migration(s)...`);

        for(const fileName of pending){
            await runMigration(fileName);
           
        }
        logger.info(`All migration(s) completed successfully`);
        
    }
    catch(error){
        console.log('Error migrating database:',error);
        process.exit(1);
    }
}

migrate().catch((error)=>{
    logger.error(`migrations failed:`,error);
    process.exit(1);
})
