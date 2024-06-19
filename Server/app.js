const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 'https://movies-6.onrender.com/api/movies' || 3000
const moviesRoutes = require("./routes/Movies");





app.use(express.json());
app.use(cors());


app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} ${new Date().toString()}`);
  next();
});


app.use("/api/movies", moviesRoutes);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});