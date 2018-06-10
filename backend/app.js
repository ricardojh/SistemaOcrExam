var http = require('http');
var mongoose = require('mongoose');
var Schema=mongoose.Schema;

var mongoDB='mongodb://127.0.0.1/testappdb'
mongoose.connect(mongoDB);
mongoose.Promise=global.Promise;
var db=mongoose.connection;
db.on('error', console.error.bind(console,'MongoDB conection error: '));

var instituteSchema=new Schema({
  nombre: String
});
module.exports=mongoose.model("Institute", instituteSchema);


var teacherSchema=new Schema({
  email: {
    work: mongoose.SchemaTypes.Email,
    home:mongoose.SchemaTypes.Email
  },
  nameuser:String,
  password: String,
  institute: {type: Schema.ObjectId, ref: "Institute"}
});
module.exports=mongoose.model("Teacher", teacherSchema);


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);

