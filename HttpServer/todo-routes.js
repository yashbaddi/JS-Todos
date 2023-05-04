import { bodyData } from "./todo-controller.js";
import {
  deleteTodo,
  insertTodo,
  readTodo,
  readTodoAll,
  updateTodo,
} from "./Model/todo-queries.js";

export function routes(path, query, method, req, res) {
  //Cors for preflight
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight CORS requests
  if (req.method === "OPTIONS") {
    console.log("hey allowed");
    res.writeHead(204);
    res.end();
    return;
  }

  //Routes
  if (path === "/") {
    //Main Route

    if (Object.keys(query).length === 0) {
      //No URL Query

      if (method === "GET") {
        //GET Request on No Url Query
        //Read All Rows

        try {
          res.writeHead(200, { "Content-Type": "application/json" });
          readTodoAll().then((value) => {
            //  value.forEach(todo=>todo.date=todo.)
            res.write(JSON.stringify(value));
            res.end();
          });
        } catch (e) {
          res.write("Error");
          res.end();
        }
      } else if (method === "POST") {
        //POST Reqest on No query
        //Insert New Row

        const bodyContent = bodyData(req);
        bodyContent
          .then((value) => {
            console.log(value);
            return insertTodo(...Object.values(value));
          })
          .then((idVal) => {
            res.writeHead(200, { "Content-Type": "plain/text" });
            res.write(idVal.toString());
            res.end();
          });
      }
    } else {
      if (method === "GET") {
        //GET with query
        //Read specific row

        res.writeHead(200, { "Content-Type": "application/json" });

        readTodo(query.id).then((value) => {
          console.log(value);
          res.write(JSON.stringify(value));
          res.end();
        });
      } else if (method === "PUT") {
        //PUT on id
        //Update Specific Row
        // console.log("UPDATE CONSOLE=",req)
        const bodyContent = bodyData(req);
        bodyContent
          .then((value) => {
            console.log(query.id);
            console.log("BODY CONTENT:", value);

            return updateTodo(...Object.values(value));
          })
          .then(() => {
            res.writeHead(200);
            res.end();
          });
      } else if (method === "DELETE") {
        //Delete row with id query

        deleteTodo(query.id).then((value) => {
          res.writeHead(200);
          res.end();
        });
      }
    }
  }
}
