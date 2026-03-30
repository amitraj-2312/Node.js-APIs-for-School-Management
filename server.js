const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// routes import
const schoolRoutes = require("./routes/schoolRoutes");

//  use routes
app.use("/", schoolRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});