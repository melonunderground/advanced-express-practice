let products = require("../products");


module.exports.list =  function list(request, response) {
    return response.json(products);
   }

   module.exports.show =  function show(request, response) {
        let productId = request.params.id;
        let foundProduct = products.find((product) => {
            return (product._id == productId)
     });
            return response.json(foundProduct)
    }
   
   module.exports.create =  function create(request, response) {
    request.body._id = products.length + 1;
    let newProduct = request.body;
    products.push(newProduct);
    return response.json(newProduct);
   }

//    module.exports.update =  function update(request, response) {
//     return response.json({theId: request.params.id});
//    }
//    module.exports.remove =  function remove(request, response) {
//     return response.json({});
//    }
   