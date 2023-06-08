import { ObjectId } from "mongodb";
import db from "./db-connection.js";

const users = db.collection("todos");

export async function createUser(username, password) {}

export async function getUserPassword(username) {
  return await pool.query("SELECT password FROM users where username=$1", [
    username,
  ]);
}

export async function createSession(username, sessionId) {
  return await pool.query(
    "INSERT INTO users(username,sessionid) VALUES ($1,$2)",
    [username, sessionId]
  );
}

export async function getSessionId(username) {
  return await pool.query("SELECT sessionid FROM users where username=$1", [
    username,
  ]);
}
