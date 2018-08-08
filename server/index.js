let express = require("express");
let bodyParser = require("body-parser")
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");

const app = express();

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

//    request.params.id


app.get("/contacts/:id",function (request,response){
    response.json(contacts)
   });

app.get("/vehicles/:id",function (request,response){
    response.json(vehicles)
   });

app.get("/comments/:id",function (request,response){
    response.json(comments)
   });

app.get("/products/:id",function (request,response){
    response.json(products)
   });

//    ### Create express routes to get one thing
//    * Add .get() routes for /contacts/:id, /vehicles/:id, /comments/:id, /products/:id
//    * add a path variable for id
//    * use the params.id to .find() the item from the appropriate array
//    * response.json() the item found 

app.listen(3001, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 3001");
});
