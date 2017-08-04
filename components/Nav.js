import React, { Component } from 'react';
import {
  Text,
  View,
  VrButton,
  Image,
  Sphere
} from 'react-vr';
class Nav extends React.Component {

  render() {

   var trackButtons = [
      {"id":"track1","title":"Track 1","mp3":"audio/nasty_letter.mp3"},
      {"id":"track2","title":"Track 2","mp3":"audio/nasty_letter.mp3"}
      ];

   const trackItems = trackButtons.map((item) =>
      <TrackBtn key={item.id} title={item.title} />
    );

    return (
     <View style={{
        flex: 1,
        flexDirection: 'column',
        width: 2,
        alignItems: 'stretch',
        transform: [{translate: [2, 1, -5]}],
      }}>

      {trackItems}
      
    </View>
    );
  }
}

function TrackBtn(props) {
  return (
   <VrButton 
      style={{ margin: 0.05, height: 0.2}}
      onClickSound={{
         mp3: asset(props.mp3),
      }}
   >
        <Text style={{fontSize: 0.2, textAlign: 'center', color: 'black'}}>{props.title}</Text>
   </VrButton>
   );
}

export default Nav;