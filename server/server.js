import http from "http";
import url from "url";
import { routes } from "./todo-routes.js";

//create a server object:

http
  .createServer(function (req, res) {
    // console.log("req con", req);
    const query = url.parse(req.url, true).query;
    const path = url.parse(req.url, true).pathname;
    console.log("path=", path);
    console.log("query=", query);
    console.log("Method=", req.method);
    routes(path, query, req.method, req, res);
  })
  .listen(3000, function () {
    console.log("server start at port 3000"); //the server object listens on port 3000
  });
