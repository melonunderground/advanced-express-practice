const ContactModel = require("../models/ContactModel");

module.exports.list =  function list(request, response) {
    ContactModel.find({}).exec()
    .then(contact => {
        return response.json(contact);
    });
}

module.exports.show =  function show(request, response) {
    ContactModel.findById(request.params.id).exec()
    .then(contact => {
        return response.json(contact)
    })
}

module.exports.create =  function create(request, response) {
    const newContact = new ContactModel({
        name: request.body.name,
        occupation: request.body.occupation,
        avatar:request.body.avatar
    });
   newContact.save()
   .then(savedContact => {
       return response.json(savedContact)
   });

}

//    module.exports.update =  function update(request, response) {
//     return response.json({theId: request.params.id});
//    }
//    module.exports.remove =  function remove(request, response) {
//     return response.json({});
//    }
   