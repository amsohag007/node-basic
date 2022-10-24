const http = require("http");

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/test") {
    res.end("testing the new route");
  } else {
    res.end("hello from server");
  }
});

server.listen(8000, () => {
  console.log("server is listing at port &000");
});
