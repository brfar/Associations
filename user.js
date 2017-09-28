var mongoose = require("mongoose");
// USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId, //puxa pelo mongoose o ID dos posts
            ref: "Post" //belong to the Post declared on embed.js
        }
    ]
});

//v retorna o codigo acima quando solicitado
module.exports = mongoose.model("User", userSchema);
