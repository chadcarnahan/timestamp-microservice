const express = require("express");
const app = express();
const router = require("./routes/date");

app.use(express.static("./view"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/", router);

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
