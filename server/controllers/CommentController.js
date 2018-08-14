let comments = require("../comments");
   
module.exports.list =  function list(request, response) {
 return response.json(comments);
}

module.exports.show =  function show(request, response) {
    let commentId = request.params.id;
    let foundComment = comments.find((comment) => {
    return (comment._id == commentId);
    });
   return response.json(foundComment)
 }

module.exports.create =  function create(request, response) {
    request.body._id = comments.length + 1;
    let newComment = request.body;
    comments.push(newComment);
   return response.json(newComment);
}

//    module.exports.update =  function update(request, response) {
//     return response.json({theId: request.params.id});
//    }
//    module.exports.remove =  function remove(request, response) {
//     return response.json({});
//    }