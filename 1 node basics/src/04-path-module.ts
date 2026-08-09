// help you to build and read file path

import path from "node:path";

//path.join(): uses the correct separator for the current os

//current working directory

const projectRoot=process.cwd();
console.log(projectRoot);

// /uploads/users/42/profile.photo.png


const userId="33";
const originalName="profile.photo.png";

// path.join() - create a path string
// it will not create the folder
// it does not check file exist or not
const uploadFilePath= path.join(projectRoot,"uploads","users",userId,originalName);
console.log(uploadFilePath);

//last part of the full path, which is actually a file name
const filename = path.basename(uploadFilePath);
console.log(filename);

//file extension

const fileExtension = path.extname(uploadFilePath);
console.log(fileExtension);



//parent folder

const parentFolder=path.dirname(uploadFilePath);
console.log(parentFolder);
