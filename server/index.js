import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import path from "path";
import fs from "fs";
import App from "../src/App";

const PORT = 3000;
const app = express();

app.use(express.static("./build"));

app.get("*", (request, response) => {
  const context = {};
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={request.url} context={context}>
      <App />
    </StaticRouter>
  );

  const indexFile = path.resolve("./build/index.html");
  fs.readFile(indexFile, "UTF8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return response.status(500).send("Oops, better luck next time!");
    }

    return response.send(
      data.replace('<div id="root"></div>', `<div id="root">${content}</div>`)
    );
  });
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});
