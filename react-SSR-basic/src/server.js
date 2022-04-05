import express from 'express';
import fs from 'fs';
//
import React from 'react';
import App from './components/App'
import {renderToString} from 'react-dom/server';

const app = express();

// public the static filder
app.use('/', express.static('build'))

app.get('/', (req, resp)=>{
  const html = fs.readFileSync('./build/index.html')
  
  const arr = [1, 2, ,3];
  // it is a json
  const reactComponent = <App list={arr}/>;
  const content = renderToString(reactComponent);
  const response = html.toString().replace(`<div id="root"></div>`, `<div id="root">${content}</div>`) 
  resp.send(response);
})



app.listen(8964, function(){
  console.log('server started!');
})