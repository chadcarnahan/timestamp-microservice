const express = require("express");
const app = express();
const router = require("./routes/date");
const cors = require("cors");
let port = process.env.PORT || 80;

app.use(express.static("./public"));
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/", router);

app.listen(port, () => {
  console.log("server is listening on port 5000...");
});
