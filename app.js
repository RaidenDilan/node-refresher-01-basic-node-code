// const fs = require('fs');
//
// const userName = 'Raiden';
//
// console.log(userName);
//
// fs.writeFile('user-data.txt', 'Name: ' + userName, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('FILE WRITTEN');
// });

const http = require('http');

const server = http.createServer((req, res) => { // expects 1 arguement
  console.log('INCOMING REQUEST');
  console.log(req.method, req.url);

  if (req.method === 'POST') {
    let body = '';

    req.on('end', () => {
      const userName = body.split('=')[1]; // username=Raiden
      res.end('<h1>' + userName + '</h1>');
    });

    req.on('data', (chunk) => {
      body += chunk
    });
  }
  else {
    res.setHeader('Content-Type', 'text/html')
    // res.setHeader('Content-Type', 'text/plain')
    // res.end('Success!');
    // res.end('<h1>Success!</h1>');
    res.end('<form method="POST"><input type="text" name="username"/><button type="submit" >Create User</button></form>');
  }
});

server.listen(3000);

// run node app.js then visit localhost:3000
