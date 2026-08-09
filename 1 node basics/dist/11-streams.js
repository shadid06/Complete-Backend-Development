// handle data piece by piece
// not loading all data at once
//read large file
//uplaod files
//downlaod files
// audio / video processing
// compression
// chunks
// here is my full 500mb file
// here is chunk 1
// here is chunk 2
// here is chunk 3
//this will be memory effecient
//readble streams - reading file / source of data
//writable streams - writing file / destination of data
//duplex streams - both reading and writing
//transform streams - data transformation, read, change it and send it to next stream
import { Readable, Transform, Writable } from "node:stream";
const readableStream = Readable.from([
    "Hello ",
    "Node ",
    "JS Streams"
]);
// callback(error,result)
const uppercaseTransfrom = new Transform({
    transform(chunk, encoding, callback) {
        const uppercaseChunk = chunk.toString();
        callback(null, uppercaseChunk.toUpperCase());
    }
});
const writeableStream = new Writable({
    write(chunk, encoding, callback) {
        console.log("writing chunk: ", chunk.toString());
        callback();
    }
});
// pipe 
async function main() {
    try {
        await readableStream.pipe(uppercaseTransfrom).pipe(writeableStream);
        // await pipeline(readableStream,uppercaseTransfrom,writeableStream);
        console.log("stream completed successfully");
    }
    catch (error) {
        console.log("stream error: ", error);
    }
}
main();
//# sourceMappingURL=11-streams.js.map