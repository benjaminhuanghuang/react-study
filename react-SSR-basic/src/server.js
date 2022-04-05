import express from 'express';


const app = express();

app.get('/', (req, resp)=>{
  resp.send('<h1>Hello</h1>');
})


app.listen(8964, function(){
  console.log('server started!');
})