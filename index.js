const express = require('express');
const app = express();
const cors = require('cors');
const connectToDb = require('./db');
connectToDb()
app.use(cors());
app.use(express.json());

 app.use("/expence", require("./routes/expense"));
app.use("/user", require("./routes/user"))
app.listen(5000, () => {
    console.log("server is running on port 5000")
});