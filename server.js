const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')


// if(firstName === ""){ //client side
//   document.getElementById('display').innerHTML = 'Type something'
// }
// else if( color == "1" && genre == "1" && food == "1" && animal == "1") {
//   console.log('Stupid name')
// }
// /api?col=${color}&gen=${genre}&food=${food}&an=${animal}

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname; //taking the value that the server is giving us/ path- without the querystring
  const params = querystring.parse(url.parse(req.url).query); //whole path that we send the fetch
  // console.log(params)
  // console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) { //get HTML file
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let wuName = "";
    //////// Name + Color///////////
    if(params['name'] == 'leon'){
      wuName = "Pumpkin Spice"
    }else if (params['name'].length <= 4 && params['col'] === 'Blue'){
      wuName = "Deciduous"
    }else if (params['name'].length <= 4 && params['col'] === 'Red'){
      wuName = "Hairy"
    }else if (params['name'].length <= 6 && params['col'] === 'Blue'){
      wuName = "Musky"
    }else if (params['name'].length <= 6 && params['col'] === 'Red'){
      wuName = "Dirty"
    }else if (params['name'].length >= 7 && params['col'] === 'Blue'){
      wuName = "Lovely"
    }else if (params['name'].length >= 7 && params['col'] === 'Red'){
      wuName = "Smelly"
    }else if (params['col'] === '0'){
      wuName = "WTF"
    }

    // color
    // if (params['col='] === 'Blue' ){
    //   wuName += " Hot"
    // }else if(params['col='] === 'Red'){
    //   wuName += " Cold"
    // }else if (params['col='] === '0'){
    //    wuName += " WTF"
    // }else{
    //   // infinite loop
    // }

    ////////////// genre + food ///////////////
    if (params['gen'] === 'Action' && params['food'] === 'Steak'){
      wuName += ' Killah'
    }else if (params['gen'] === 'Action' && params['food'] === 'Lasagna'){
      wuName += ' Rotten'
    }else if(params['gen'] === 'Horror' && params['food'] === 'Steak'){
      wuName += ' Ripe'
    }else if(params['gen'] === 'Horror' && params['food'] === 'Lasagna'){
      wuName += ' Beautiful'
    }else if (params['gen'] === '0'){
       wuName = "WTF"
    }else{
      // infinite loop
    }

    //     /////////food ////////////
    // if (params['food='] === 'Steak') {
    //   wuName += ' Chef'
    // }
    // else if(params['food='] === 'Lasagna'){
    //   wuName += ' Saucy'
    // }
    // else if (params['food='] === '0'){
    //    wuName = "WTF"
    // }
    // else{
    //   // infinite loop
    // }

    ///////// animal//////////
    if (params['an'] === 'Lion') {
      wuName += ' Fool'
    }
    else if(params['an'] === 'Tiger'){
      wuName += ' HuntaH'
    }
    else if (params['an'] === '0'){
       wuName = "WTF"
    }
    else{
      // infinite loop
    }

    // wuName = wuNamep1 + wuNamep2 + wuNamep3
      console.log(wuName)
      res.end(JSON.stringify(wuName));
      res.end(JSON.s)
  }
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
