var mongoose = require('mongoose');
var uristring = "mongodb://root:1234@ds013916.mlab.com:13916/lab2"; 
mongoose.connect(uristring,function(err,res){
    if(err) {
        console.log("ERROR connecting to: " + uristring + ". " + err);
    } else {
        console.log("Succeeded connected to: " + uristring);
    }
})

var userSchema = new mongoose.Schema({
    id: Number,
    name: String
});

var City = mongoose.model('Users', userSchema);

