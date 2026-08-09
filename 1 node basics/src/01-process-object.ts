// env variables
// command line arguments
// exit code
// process lifecycle events
// read backend port from env file
// read secrets - db urls, api keys, password, google auth secret // read CLI arguments in scripts
// process.env

import process from "node:process";
console.log(process.env);

//dotenv npm can be used to load env variables

//process.env values are always string or undefined
//string validation and sanitization should be done

// const port=Number(process.env.PORT || 3000);
// const DB_URL=process.env.NODE_ENV==="development"?process.env.DB_URL:"";

const command=process.argv[2] ?? "start";

const shouldFail=process.argv.includes("--fail");

const shouldCrash=process.argv.includes("--crash");

// do not start async here, node is already shutting down
// do final log or cleanups

process.on("exit",()=>{

});

function runApp():void{
    // console.log({
    //     command,
    // });
    
    if(shouldFail){
        console.error("Manual failure triggered with --fail flag");
        process.exit(1);
    }
    if(shouldCrash){
        console.error("Manual crash triggered with --crash flag");
         process.exit(1);
    }
    
}

runApp();