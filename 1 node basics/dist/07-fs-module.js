// fs- file system
//create folder
//read write file
//delete file
// check file information
//sync apis: blocking:fs.mkdirSync, fs.readFileSync, fs.writeFileSync, fs.unlinkSync, fs.statSync
// async apis: non-blocking:fs.mkdir, fs.readFile, fs.writeFile, fs.unlink, fs.stat
// callback apis,promise apis
// small startup script
//build scripts
//local demo
//bad use:
//http req handler
//high traffic
//background jobs
import path from "node:path";
import fs from "node:fs";
import fsPromises from "node:fs/promises";
const DEMO_FOLDER_PATH = path.join(process.cwd(), "file-system", "fs-demo");
const SYNC_FILE_PATH = path.join(DEMO_FOLDER_PATH, "demo.txt");
const CALLBACK_FILE_PATH = path.join(DEMO_FOLDER_PATH, "callback-demo.txt");
const PROMISE_FILE_PATH = path.join(DEMO_FOLDER_PATH, "promise-demo.txt");
function runSyncExample() {
    //write conent to a file
    fs.writeFileSync(SYNC_FILE_PATH, "Hello World!", "utf-8");
    fs.appendFileSync(SYNC_FILE_PATH, " Additional content 2", "utf-8");
    console.log("file written successfully");
    const fileContent = fs.readFileSync(SYNC_FILE_PATH, "utf-8");
    console.log("file content", fileContent);
    const fileStats = fs.statSync(SYNC_FILE_PATH);
    console.log("file stats", fileStats);
    return {
        style: "sync",
        fileName: path.basename(SYNC_FILE_PATH),
        content: fileContent,
        sizeInBytes: fileStats.size
    };
}
// runSyncExample();
function ensureDemoFolderExists() {
    if (!fs.existsSync(DEMO_FOLDER_PATH)) {
        fs.mkdirSync(DEMO_FOLDER_PATH, { recursive: true });
        console.log("folder created");
    }
    else {
        console.log("folder already exists");
    }
}
//callback(error,result)
function runCallbackExample() {
    return new Promise((resolve, reject) => {
        fs.writeFile(CALLBACK_FILE_PATH, "hello", "utf-8", (writeErr) => {
            if (writeErr) {
                reject(writeErr);
                return;
            }
            fs.appendFile(CALLBACK_FILE_PATH, " additional content3", "utf-8", (appendErr) => {
                if (appendErr) {
                    reject(appendErr);
                    return;
                }
                fs.readFile(CALLBACK_FILE_PATH, "utf-8", (readErr, data) => {
                    if (readErr) {
                        reject(readErr);
                        return;
                    }
                    fs.stat(CALLBACK_FILE_PATH, (statErr, stats) => {
                        if (statErr) {
                            reject(statErr);
                            return;
                        }
                        const result = {
                            style: "callback",
                            fileName: path.basename(CALLBACK_FILE_PATH),
                            content: data,
                            sizeInBytes: stats.size
                        };
                        resolve(result);
                    });
                });
            });
        });
    });
}
//using promise
async function runPromiseExample() {
    await fsPromises.writeFile(PROMISE_FILE_PATH, "hello from promise", "utf-8");
    await fsPromises.appendFile(PROMISE_FILE_PATH, "additional content 4", "utf-8");
    const content = await fsPromises.readFile(PROMISE_FILE_PATH, "utf-8");
    const stats = await fsPromises.stat(PROMISE_FILE_PATH);
    return {
        style: "promise",
        fileName: path.basename(PROMISE_FILE_PATH),
        content,
        sizeInBytes: stats.size
    };
}
async function main() {
    try {
        ensureDemoFolderExists();
        // const fileResult=runSyncExample();
        // const fileResult=await runCallbackExample();
        const fileResult = await runPromiseExample();
        console.log(fileResult);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "unknown error";
        console.log("file system error: ", message);
    }
}
main();
//# sourceMappingURL=07-fs-module.js.map