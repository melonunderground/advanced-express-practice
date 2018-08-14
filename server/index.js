let express = require("express");
let bodyParser = require("body-parser");

let CommentRoutes = require("./routes/CommentRoutes");
let ContactRoutes = require("./routes/ContactRoutes");
let ProductRoutes = require("./routes/ProductRoutes");
let VehicleRoutes = require("./routes/VehicleRoutes");

const app = express();
app.use(bodyParser.json());

app.use(CommentRoutes);
app.use(ContactRoutes);
app.use(ProductRoutes);
app.use(VehicleRoutes);


app.listen(3001, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 3001");
});
