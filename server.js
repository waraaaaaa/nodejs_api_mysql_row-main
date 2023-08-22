const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res)=>{
    res.json({message: "Welcome to itd102 application"});
});

require("./app/routes/tutorial.routes.js")(app);
//var favoriteMovie = function displayFavorite(movieName) {
//  return movieName;
//};
//console.log(favoriteMovie('Finding Nemo'));

var area = function (radius) {
  return Math.PI * radius * radius;
};

console.log(area(5));


app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
});