let express = require("express");
let bodyParser = require("body-parser");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");

const app = express();

app.use(bodyParser.json())


app.get("/contacts",function (request,response){
    response.json(contacts)
   });

app.get("/vehicles",function (request,response){
    response.json(vehicles)
   });

app.get("/comments",function (request,response){
    response.json(comments)
   });

app.get("/products",function (request,response){
    response.json(products)
   });

app.get("/contact/:id",function (request,response){
    let foundContact = contacts.find(function(item) {
        return item._id == request.params.id;
 });
response.json(foundContact)
});

app.get("/vehicle/:id",function (request,response){
    let foundVehicle = vehicles.find(function(item) {
        return item._id == request.params.id;
    });
   response.json(foundVehicle)
   });

app.get("/comment/:id",function (request,response){
    let foundComment = comments.find(function(item) {
        return item._id == request.params.id;
    });
   response.json(foundComment)
   });

app.get("/product/:id",function (request,response){
    let foundProduct = products.find(function(item) {
        return item._id == request.params.id;
    });
   response.json(foundProduct)
   });


app.post("/contacts/",function (request,response){
    request.body._id = contacts.length + 1;
    let newContact = request.body;
    contacts.push(newContact);
    response.json(newContact);
   });

app.post("/vehicles/",function (request,response){
    request.body._id = vehicles.length + 1;
    let newVehicle = request.body;
    vehicles.push(newVehicle);
    response.json(newVehicle);
   });
 
app.post("/comments/",function (request,response){
    request.body._id = comments.length + 1;
    let newComment = request.body;
    comments.push(newComment)
    response.json(newComment)
   });

app.post("/products/",function (request,response){
    request.body._id = products.length + 1;
    let newProduct = request.body;
    products.push(newProduct)
    response.json(newProduct)
   });



app.listen(3001, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 3001");
});
