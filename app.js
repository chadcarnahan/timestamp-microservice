const express = require("express");
const app = express();
const router = require("./routes/date");
let port = process.env.PORT || 5000;

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/", router);

app.listen(port, () => {
  console.log("server is listening on port 5000...");
});
