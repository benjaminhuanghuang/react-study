1. JSX to virtual DOM
```
  let element = (<div id='A1'> 
        <div id='B1'>Hi</div>
      </div>);
```
to 
```
  var element = React.createElement('div',{id:'A1'}, React.createElement('div', {id: 'B1'}));
```




