import http from "http";
import url from "url";
import querystring from "querystring";
import formidable from "formidable";
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
    const form = new formidable.IncomingForm();

    if (path === "/") {
      if (Object.keys(query).length === 0) {
        if (req.method === "GET") {
          res.writeHead(200, { "Content-Type": "application/json" });
          readTodoAll().then((value) => {
            res.write(JSON.stringify(value));
            res.end();
          });
        } else if (req.method === "POST") {
          const bodyContent = bodyData(req);
          bodyContent
            .then((value) => {
              console.log(value);
              return insertTodo(...Object.values(value));
            })
            .then((value) => {
              res.writeHead(200);
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
        } else if (req.method === "PUT") {
          const bodyContent = bodyData(req);
          bodyContent
            .then((value) => {
              console.log(query.id);
              return updateTodo(query.id, ...Object.values(value));
            })
            .then((value) => {
              res.writeHead(200);
              res.end();
            });
          //   updateTodo(query.id).then((value) => {
          //     res.write(JSON.stringify(value));
          //     res.end();
          //   });
        } else if (req.method === "DELETE") {
          deleteTodo(query.id).then((value) => {
            res.writeHead(200);
            res.end();
          });
        }
      }
    }
  })
  .listen(3000, function () {
    console.log("server start at port 3000"); //the server object listens on port 3000
  });

async function bodyData(stream) {
  let body = [];
  await stream
    .on("data", (chunk) => {
      body.push(chunk);
      console.log(typeof chunk, Object.keys(chunk));
    })
    .on("end", () => {
      console.log("bin buf", body);
      body = Buffer.concat(body).toString();
    });

  return JSON.parse(body);
}
