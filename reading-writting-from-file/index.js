const fs = require("fs");

fs.readFile("./read.txt", "utf-8", (err, data) => {
  if (err) console.log("error has occurred during file read");
  console.log("read-from-file->", data);
});

fs.writeFile("./write.txt", "hello", (err) => {
  if (err) console.log("error has occurred during writting into file ", err);
  console.log("your file has been written");
});
