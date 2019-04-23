
const express = require ('express');
var app = express();

const port = process.env.PORT || 5000
app.get ('/',(req,res)=> {
  res.send('server.up')
});

app.use(express.static('public'));

app.listen(port, function(){
  console.log('Listen port 8080');
})
