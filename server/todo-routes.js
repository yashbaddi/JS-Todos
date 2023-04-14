import { bodyData } from "./todo-controller.js";
import {
  deleteTodo,
  insertTodo,
  readTodo,
  readTodoAll,
  updateTodo,
} from "./Model/todo-queries.js";

export function routes(path, query, method, req, res) {
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
          .then(() => {
            res.writeHead(200);
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
        const bodyContent = bodyData(req);
        bodyContent
          .then((value) => {
            console.log(query.id);
            return updateTodo(query.id, ...Object.values(value));
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
