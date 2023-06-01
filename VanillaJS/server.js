import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(express.static("Static"));
// app.use(
//   createProxyMiddleware("/api", {
//     target: "localhost:3000",
//     pathRewrite: {
//       "^/api": "",
//     },
//   })
// );

app.listen(2000, () => {
  console.log("Frontend Server Started at port 2000");
});
