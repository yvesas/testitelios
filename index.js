const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/upload',function(req,res){
  res.sendFile(path.join(__dirname+'/upload.html'));
});


app.use('/', router);
app.listen(3001);
console.log("Running on http://localhost:3001")