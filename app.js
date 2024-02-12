const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Hello Nirmal</title></head>");
  res.write("<body><h1>My First Node Js Server</h1></body>");
  res.write("</html>");
  res.end();
});
server.listen(8400);
