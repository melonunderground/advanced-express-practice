const ProductModel = require("../models/ProductModel");

module.exports.list =  function list(request, response) {
    ProductModel.find({}).exec()
    .then(product => {
        return response.json(product);
    });
}

module.exports.show =  function show(request, response) {
    ProductModel.findById(request.params.id).exec()
    .then(product => {
        return response.json(product)
    })
}

module.exports.create =  function create(request, response) {
    const newProduct = new ProductModel({
        name: request.body.name,
        description: request.body.description
    });
   newProduct.save()
   .then(savedProduct => {
       return response.json(savedProduct)
   });

}

//    module.exports.update =  function update(request, response) {
//     return response.json({theId: request.params.id});
//    }
//    module.exports.remove =  function remove(request, response) {
//     return response.json({});
//    }
   