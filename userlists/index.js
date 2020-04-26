var express = require('express')

var app = express()

app.get('/main', function(request, response){
   console.log(request);
   response.send("Hello Wordll")
})//app.get(요청경로, 콜백함수(반응및 요청에 의한 행동))

//app.listen(포트, 호스트(서버url), backlog, 콜백함수)
app.listen(5000, function(){
    console.log("server is running at http://localhost:5000")
})