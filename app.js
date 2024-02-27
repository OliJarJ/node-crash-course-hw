const http = require('http');
const fs = require('fs');



const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views';
    switch (req.url) {
        case = '/': //the root of the website
            path += 'index.html';
            res.statusCode = 200;
            break;
        case: '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case: '/about-me':
            
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    //send an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            //res.write(data);
            res.statussCode = 200;
            res.end(data);
        }
    })

});


server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});

//3rd party package called Express - will use later on
//first cover how to install and use 3rd party packages
