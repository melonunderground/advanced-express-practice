const CommentModel = require("../models/CommentModel");

module.exports.list =  function list(request, response) {
    CommentModel.find({}).exec()
    .then(comments => {
        return response.json(comments);
    });
}

module.exports.show =  function show(request, response) {
    CommentModel.findById(request.params.id).exec()
    .then(comment => {
        return response.json(comment)
    })
}

module.exports.create =  function create(request, response) {
    const newComment = new CommentModel({
        body:request.body.body
    });
   newComment.save()
   .then(savedComment => {
       return response.json(savedComment)
   });

}

//    module.exports.update =  function update(request, response) {
//     return response.json({theId: request.params.id});
//    }
//    module.exports.remove =  function remove(request, response) {
//     return response.json({});
//    }