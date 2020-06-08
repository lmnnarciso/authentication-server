const express = require("express");
const userRouter = require("./users.route.js");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;
require("./db");
const app = express();

app.use(express.json());
app.use(cors());
app.use(userRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// const uri =
//   "mongodb+srv://admin:admin@cluster0-tqorf.mongodb.net/test?retryWrites=true&w=majority";
// Prints "MongoError: bad auth Authentication failed."
