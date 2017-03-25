var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
 
var article={
    title:"hello world",
    heading:"first page",
    date:"25 sept 1996",
    content:"Code demo: Write some CSS",
};
function createhtml(data)
{
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
  var html=`
  <html>
  <title>${title}</title>
  <head>${heading}</head>  
  <body>
  <h2>${date}</h2>
  <h6>${content}</h6>
  </body>
  </html>`
  return html;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('article1', function (req, res) {
 // res.send(createhtml(article));
  res.send("helooo");
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('index.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8081; // Use 8080 for local development because you might already have apache running on 80
app.listen(8081, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
