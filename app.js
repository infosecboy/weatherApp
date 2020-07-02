var http  = require('http')
const argv = require('yargs').argv;
let city = argv.c || 'Mumbai';
let apiKey = argv.k 
var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
var server = http.createServer(function(request,response){
var request = require('request')
request(url,function(err,res,body){
var data = JSON.parse(body);

response.write('<html><head><meta charset = "UTF-8"><meta name = "viewport" content = "width-device-width, initial-scale=1.0"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"></head><body><div id="container">');

response.write("<p class = 'text-center font-weight-bold'>Details of temperature for "+`${city}`+"</p>"+"<br></br>");
response.write("<table class='table table-hover'><thead>");
response.write("<tr>");
response.write("<th>Temperature</th>");
response.write("<th>Humidity</th>");
response.write("<th>Minimum Temperature</th>");
response.write("<th>Maximum Temperature</th>");


response.write("</tr>");
response.write("</thead>");
response.write("<tbody>");
response.write("<tr>");
response.write("<td>"+data.main["temp"]+"</td>");
response.write("<td>"+data.main["humidity"]+"</td>");
response.write("<td>"+data.main["temp_min"]+"</td>");
response.write("<td>"+data.main["temp_max"]+"</td>");
response.write("</tr>");
response.write("</tbody>");
response.write("</table>");
response.write("<p class = 'font-weight-bold'> "+"Weather Condition: "+data.weather[0].description+"</p>")
response.write("</div></body><script src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script></html>")
response.end();
})
}).listen(8000);
