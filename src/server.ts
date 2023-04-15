import express from "express";
import swaggerUi from "swagger-ui-express";

import swaggerDocument from "./docs/openapi.json";

const app = express();

app.use(express.json());

const options = {
  customCss: ".swagger-ui .topbar { display: none }",
};

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, options)
);

app.use("/docs", (request, response) => {
  return response.sendFile(`${process.cwd()}/dist/index.html`);
});

app.listen(3333, () => console.log("Server is running!"));
