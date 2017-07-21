import React from 'react';
import ReactDOM  from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import Players from '../imports/api/players';
import TitleBar from '../imports/ui/titleBar';
import AddPlayer from '../imports/ui/addPlayer';
import PlayerList from '../imports/ui/playerList';

Meteor.startup(function(){
  Tracker.autorun(function(){
    let players = Players.find().fetch();
    let title = "Score keep";
    let name = 'Mike';
    let jsx = (
      <div>
        <TitleBar title={title} subtitle="Created by Benjamin"/>
        <PlayerList players={players}/>
        <AddPlayer score={10}/>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});