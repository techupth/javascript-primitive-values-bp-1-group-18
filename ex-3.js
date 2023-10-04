// Exercise #3: Uploading Progress

let totalFileSize = 250000;
let uploadedSize = 30000;

let uploadProgress = 0;
uploadProgress = `${uploadedSize / totalFileSize * 100} %`; 
console.log(uploadProgress);