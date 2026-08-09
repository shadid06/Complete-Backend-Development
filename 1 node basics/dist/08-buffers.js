//buffers - raw binary data
// binary data means - when u stored your data in bytes
import { log } from "console";
// reading files
// receving http req bodies
// working with streams
//handling images, pdf files, video files
// encrypt and hashing
// string-human readble
// buffer- raw bytes
const textBuffer = Buffer.from("hello world", "utf-8");
console.log("textBuffer:", textBuffer);
//convert to string
console.log("textBuffer converted to string:", textBuffer.toString("utf-8"));
//buffer length
console.log("buffer length:", textBuffer.length);
//.alloc
const fixedBuffer = Buffer.alloc(4);
console.log("empty fixedBuffer:", fixedBuffer);
fixedBuffer.write("hello");
console.log("filled buffer:", fixedBuffer.toString("utf-8")); //hell
console.log("fixed after write:", fixedBuffer);
// chunks
const chunks = [
    Buffer.from("Hello"),
    Buffer.from(" Node "),
    Buffer.from("JS "),
];
const concatenatedBuffer = Buffer.concat(chunks);
console.log("concatenated Buffer:", concatenatedBuffer);
console.log("concatenated Buffer to string:", concatenatedBuffer.toString("utf-8"));
//# sourceMappingURL=08-buffers.js.map