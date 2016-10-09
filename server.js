var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var ArticleOne= {
   title: 'Article One| Preeti GR',
   heading: 'Article One',
   date: 'sep 4, 1995',
   content: `
   <p>
                                    This is my first article!! This is my first article!! This is my first article!! This is my first article!! This is my first article!! This is my first article!! This is my first article!! This is my first article!! This is my first article!!
                      </p>
                      <p>
                                    This is my first article!! This is my first article!! This is my first article!! This is my first article!! This is my first article!! This is my first article!! This is my first article!! This is my first article!! This is my first article!!
                        </p>
                                     <p>
                                    This is my first article!! This is my first article!! This is my first article!! This is my first article!! This is my first article!! This is my first article!! This is my first article!! This is my first article!! This is my first article!!
                       </p>`
};

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
var htmlTemplate = `
<html>
<head>
    <title>
        ${title}
        </title>
         <link href="/ui/style.css" rel="stylesheet" />
      </head>
        <body>
            <div class="container">
                <div>
                <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                    -Preeti GR
                    </h3>
                    <div>
                        ${date}
                        </div>
                        <div>
${content}                                
                    </div>
                    </div>
                    </body>
                </html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function (req, res) {
res.send(createTemplate(ArticleOne));
}); 
    
app.get('/article-two',function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/ui/madi.png', function (req, res) {
app.get('/article-three',function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
 res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80


app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
