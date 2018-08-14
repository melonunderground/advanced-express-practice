let vehicles = require("../vehicles");
   
module.exports.list =  function list(request, response) {
 return response.json(vehicles);
}

module.exports.show =  function show(request, response) {
    let vehicleId = request.params.id;
    let foundVehicle = vehicles.find((vehicle) => {
    return (vehicle._id == vehicleId);
    });
   return response.json(foundVehicle)
 }

module.exports.create =  function create(request, response) {
    request.body._id = vehicles.length + 1;
    let newVehicle = request.body;
    vehicles.push(newVehicle);
    response.json(newVehicle);
}

//    module.exports.update =  function update(request, response) {
//     return response.json({theId: request.params.id});
//    }
//    module.exports.remove =  function remove(request, response) {
//     return response.json({});
//    }