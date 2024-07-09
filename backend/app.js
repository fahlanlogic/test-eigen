const express = require("express");
const cors = require("cors");
const router = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);

// inisialisasi port
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
})
