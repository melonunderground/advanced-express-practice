let mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    body: {
        type: String
    }
});

module.exports = mongoose.model("Comment", commentSchema);