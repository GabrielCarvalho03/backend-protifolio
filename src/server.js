const express = require("express");
const cors = require("cors");
const app = express();
require("./database");

const projectsRoutes = require("./router/Projects/projects.routes");

app.use(cors());
app.use(express.json());

app.use("/projects", projectsRoutes);

app.listen(8000, () => {
  console.log("Server is running on port 3000");
});
