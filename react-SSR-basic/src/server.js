import express from 'express';
//
import React from 'react';
import App from './components/App'
import {renderToString} from 'react-dom/server';

const app = express();

app.get('/', (req, resp)=>{
  const arr = [1, 2, ,3];
  // it is a json
  const reactComponent = <App list={arr}/>;
  resp.send(renderToString(reactComponent));
})


app.listen(8964, function(){
  console.log('server started!');
})