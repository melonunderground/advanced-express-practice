const VehicleModel = require("../models/VehicleModel");
   
module.exports.list =  function list(request, response) {
    VehicleModel.find({}).exec()
    .then(vehicle => {
        return response.json(vehicle);
    });
}

module.exports.show =  function show(request, response) {
    VehicleModel.findById(request.params.id).exec()
    .then(vehicle => {
        return response.json(vehicle)
    })
}
    
module.exports.create =  function create(request, response) {
    const newVehicle = new VehicleModel({
        year: request.body.year,
        make: request.body.make,
        model: request.body.model
    });
    newVehicle.save()
    .then(savedVehicle => {
        return response.json(savedVehicle)
    });
    
}




//    module.exports.update =  function update(request, response) {
//     return response.json({theId: request.params.id});
//    }
//    module.exports.remove =  function remove(request, response) {
//     return response.json({});
//    }