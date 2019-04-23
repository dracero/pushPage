
const express = require ('express');
var app = express();


app.get ('/',(req,res)=> {
  res.send('server.up')
});

app.use(express.static('public'));

app.listen(9290, function(){
  console.log('Listen port 8080');
})
