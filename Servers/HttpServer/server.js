import http from "http";
import url from "url";
import { routes } from "./todo-routes.js";

//create a server object:

http
  .createServer(function (req, res) {
    // console.log("req con", req);
    console.log(url.parse(req.url, true));
    const { query, pathname } = url.parse(req.url, true);
    console.log("pathName=", pathname);
    console.log("query=", query);
    console.log("Method=", req.method);
    routes(pathname, query, req.method, req, res);
  })
  .listen(3000, function () {
    console.log("server start at port 3000"); //the server object listens on port 3000
  });
