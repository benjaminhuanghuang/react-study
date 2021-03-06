import React from 'react';
import ReactDOM  from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from '../imports/api/players';

const renderPlayers = (playersList)=>{
  return playersList.map((player)=>{
    return (
      <p key= {player._id}>
        {player.name} has {player.score} point(s).
        <button onClick={()=> Players.update(player._id, {$inc:{score:-1}})}>-1x</button>
        <button onClick={()=>{Players.update(player._id, {$inc:{score:1}});}}> +1</button>
        <button onClick={()=> Players.remove(player._id)}> x</button>
      </p>
    );
  });
}

const handleSubmit= (e)=>{
  let playerName = e.target.playerName.value;
  e.preventDefault();
  if(playerName)
    {
      e.target.playerName.value='';
      Players.insert({
        name: playerName,
        score : 0
      });
    }
}


Meteor.startup(function(){
  Tracker.autorun(function(){
    let players = Players.find().fetch();
    let title = "Score keep";
    let name = 'Mike';
    let jsx = (
      <div>
        <h1>{title}</h1>
        <p>This is my second.</p>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder = "Player name"/>
          <button> Add Player </button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});