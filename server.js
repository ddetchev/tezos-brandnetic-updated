const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://ddetchev:nocteferis01@cluster0.y5ilg.mongodb.net/myFirstDatabase")

app.use("/", require("./routes/userRoute"));

app.listen(3001, function() {
    console.log("Express server running on port 3001");
})