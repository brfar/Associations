var mongoose = require("mongoose");
//you have to require again when modulizing the code

// POST - title, content
var postSchema = new mongoose.Schema({
   title: String,
   content: String
});

//funfa meio que um return
module.exports = mongoose.model("Post", postSchema);
