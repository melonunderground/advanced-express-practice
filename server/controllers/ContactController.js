   let contacts = require("../contacts");
   
   module.exports.list =  function list(request, response) {
    return response.json(contacts);
   }

   module.exports.show =  function show(request, response) {
        let contactId = request.params.id;
        let foundContact = contacts.find((contact) => {
            return (contact._id == contactId)
     });
            return response.json(foundContact)
    }
   
   module.exports.create =  function create(request, response) {
    request.body._id = contacts.length + 1;
    let newContact = request.body;
    contacts.push(newContact);
    return response.json(newContact);
   }

//    module.exports.update =  function update(request, response) {
//     return response.json({theId: request.params.id});
//    }
//    module.exports.remove =  function remove(request, response) {
//     return response.json({});
//    }
   