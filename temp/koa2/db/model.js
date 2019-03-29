var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//define your schema here, schema means your data structure
var blogSchema = new Schema({
 title:String,  	
 job: String,
 brand_country:String,
 author:String,
 text:String,
 time:Date,
 create_time:String,
 additional_notes:String,
 program:String,
 supplier:String,
 buyer:String,
 due_date:String,
 packout_date:String,
 ship_date:String,
 instore_date:String,
 status:String,
 contact:String,
 job_status:String
});

// define you model here:
// define your collection name -> mysql table
var BlogModel = mongoose.model('blog', blogSchema); 
//The database you want to connect, if it doesn’t exist, it will created automatically unless the collection of the row was affected
mongoose.connect('mongodb://localhost:27017/myBlog',{ useNewUrlParser: true } ); 


function close(){
	mongoose.connection.close()
}
module.exports={
   BlogModel,
   close
}