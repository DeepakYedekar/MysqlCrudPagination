const express = require("express");
const PORT = process.env.PORT;
const { router } = require("./routes/index");
const setUpAndStartServer = async () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/", router);
  app.listen(PORT, () => {
    console.log(`server is started on port ${PORT}`);
  });
};

setUpAndStartServer();