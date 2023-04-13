import http from "http";
import url from "url";
import {
  deleteTodo,
  insertTodo,
  readTodo,
  readTodoAll,
  updateTodo,
} from "./Model/todo-queries.js";
//create a server object:

http
  .createServer(function (req, res) {
    // console.log("req con", req);
    const query = url.parse(req.url, true).query;
    const path = url.parse(req.url, true).pathname;
    console.log("path=", path);
    console.log("query=", query);
    console.log("Method=", req.method);

    if (path === "/") {
      if (Object.keys(query).length === 0) {
        if (req.method === "GET") {
          res.writeHead(200, { "Content-Type": "application/json" });
          readTodoAll().then((value) => {
            res.write(JSON.stringify(value));
            res.end();
          });
        }
      } else {
        if (req.method === "GET") {
          res.writeHead(200, { "Content-Type": "application/json" });

          readTodo(query.id).then((value) => {
            console.log(value);
            res.write(JSON.stringify(value));
            res.end();
          });
        } else if (req.method === "POST") {
          res.writeHead(200, { "Content-Type": "application/json" });
          insertTodo(query.id).then((value) => {
            res.write(JSON.stringify(value));
            res.end();
          });
        } else if (req.method === "PUT") {
          res.writeHead(200, { "Content-Type": "application/json" });
          console.log(req.body);
          //   updateTodo(query.id).then((value) => {
          //     res.write(JSON.stringify(value));
          //     res.end();
          //   });
          res.end();
        } else if (req.method === "DELETE") {
          res.writeHead(200, { "Content-Type": "application/json" });
          deleteTodo(query.id).then((value) => {
            res.write(JSON.stringify(value));
            res.end();
          });
        }
      }
    }
  })
  .listen(3000, function () {
    console.log("server start at port 3000"); //the server object listens on port 3000
  });
