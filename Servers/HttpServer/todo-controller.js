export async function bodyData(stream) {
  let body = [];
  await stream
    .on("data", (chunk) => {
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();
    });

  return JSON.parse(body);
}
