const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

app.get("/", (res, req) => {
  req.send("working");
});

app.get("/app", (res, req) => {
  req.send("App");
});

app.listen(port, console.log(`Server Running in on port ${port}`));
