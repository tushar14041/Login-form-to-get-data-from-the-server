var express = require('express');  
var app= express();

var port = 3001;

app.use(express.static(__dirname + '/'));
app.listen(port);

console.log('Server started at' + port);


app.post('/api/login',function(req, res){
 var results = [{
			title: "Java",
			instructor: "Saurabh",
			level: "Beginner",
			total_vides: 10
		},{
			title: "C++",
			instructor: "Saurabh",
			level: "Beginner",
			total_vides: 15
		},{
			title: "C",
			instructor: "Saurabh",
			level: "Beginner",
			total_vides: 12
		},{
			title: "Web Development",
			instructor: "Shahid",
			level: "Beginner",
			total_vides: 20
	     }, 
	     {
			title: "Web Development",
			instructor: "Shahid",
			level: "Beginner",
			total_vides: 20
	     }];

	     res.json(results);


})