const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000
const moviesRoutes = require("./routes/Movies");





app.use(express.json());
app.use(cors());


app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} ${new Date().toString()}`);
  next();
});


app.use("/api/movies", moviesRoutes);

app.listen(3000, () => {
  console.log(`Server running on ${PORT}`);
});