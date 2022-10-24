const fs = require("fs");
const superagent = require("superagent");

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) reject("unable to read file");
      resolve(data);
      console.log("read complete:", data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject("unable to write file");
      resolve();
      console.log("Write complte");
    });
  });
};

/// using promise promise
// readFilePro("./read.txt")
//   .then((data) => {
//     console.log("data read complete:", data);
//     return superagent.get(`https://dog.ceo/api/${data}/image/random`);
//   })
//   .then((res) => {
//     console.log("dog images url has been fetched", res.body.message);
//     writeFilePro("./write.txt", res.body.message);
//   })
//   .then(() => {
//     console.log("images has been saved");
//   })
//   .catch((err) => {
//     console.log("error message:", err.message);
//   });

// const dogPic = async () => {
//   try {
//     const name = await readFilePro("./read.txt");

//     const data = await superagent.get(
//       `https://dog.ceo/api/${name}/image/random`
//     );
//     console.log("fetched data");

//     await writeFilePro("./write.txt", data.body.message);
//   } catch (err) {
//     console.log("An error has occurred: ", err.message);
//     throw err
//   }
// };

//get multiple do
const dogPic = async () => {
  const name = await readFilePro("./read.txt");
  const data1 = superagent.get(`https://dog.ceo/api/${name}/image/random`);
  const data2 = superagent.get(`https://dog.ceo/api/${name}/image/random`);
  const data3 = superagent.get(`https://dog.ceo/api/${name}/image/random`);

  const all = await Promise.all([data1, data2, data3]);
  const imgs = all.map((el) => el.body.message).join(".\n");

  const write = await writeFilePro("./write.txt", imgs);
};

// get async function value

(async () => {
  console.log("1:Geting dog pic");
  const x = await dogPic();
  console.log("2:Done");
})();

/// full async await implementation
// const fs = require("fs");
// const superagent = require("superagent");

// const readFilePro = async (file) => {
//   const text = await fs.readFile(file, "utf-8", (err, data) => {
//     if (err) console.log("reading error", err.message);
//     console.log("text reading done:", data);
//   });
// };

// const writeFilePro = async (file, data) => {
//   const write = await fs.readFile(file, data, (err) => {
//     console.log("writting error:", err.message);
//   });
//   console.log("Writing done");
// };

// const dogPic = async () => {
//   try {
//     const name = await readFilePro("./read.txt");

//     const data = await superagent.get(
//       `https://dog.ceo/api/${name}/image/random`
//     );
//     console.log("fetched data", data.body.message);

//     await writeFilePro("./write.txt", data.body.message);
//   } catch (err) {
//     console.log("An error has occurred: ", err.message);
//   }
// };

// (async () => {
//   console.log("starting");
//   const x = await dogPic();
//   console.log("data", x);
//   console.log("finished");
// })();
