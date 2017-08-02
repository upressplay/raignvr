
import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Plane,
  Cylinder,
  PointLight,
  Image,
  Sphere,
  Sound,
} from 'react-vr';

export default class RaignVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('raign_background.jpg')}lit={true}/>




         <Plane
            dimWidth={20}
            dimHeight={33}
            lit={false}
            style={{
              position: 'absolute',
              opacity:.999,
              transform: [{translate: [0, 0, -50]}],
            }}
            texture={asset('chair.png')}
          />

          <Plane
            dimWidth={24}
            dimHeight={25}
            lit={false}
            style={{
              position: 'absolute',
              opacity:.999,
              transform: [{translate: [3, -2, -49.5]}],
            }}
            texture={asset('rachel.png')}
          />


          <Plane
            dimWidth={25}
            dimHeight={6.5}
            lit={false}
            style={{
              position: 'absolute',
              opacity:.999,
              transform: [{translate: [0, 16, -40]}]
            }}
            texture={asset('logo.png')}
          />

        
         <Sphere
            radius={0.5}
            widthSegments={20}
            heightSegments={20}
            lit={true}
            style={{
               position: 'absolute', 
               transform: [{translate: [10, 1, -30]}],
               color:"#e5d510"
               }}
         >

         </Sphere>
            <Sound source={{
                  mp3: asset('audio/bowls.mp3'),
                  autoPlay:true,
                  loop:true,
                  volume:2
               }} />
         <PointLight 
            angle={ 15  } 
            distance ={25} 
            decay ={2} 
            intensity = {3}
            penumbra = {50}
            color="#e5d510"
            style={{
               position: 'absolute', 
               transform: [{translate: [10, 1, -29]}],
               color:"#e5d510"
               }}
            wireframe={true}
            />

         <Text
            lit={true}
            style={{
               position: 'absolute',
               fontSize: 1,
               textAlign: 'center',
               textAlignVertical: 'center',
               transform: [{translate: [9.0, .5, -30]}],
               }}>
            tracks
         </Text>

         <Cylinder
          radiusTop={12}
          radiusBottom={5}
          dimHeight={35}
          segments={50}
          texture={asset('foreground.png')}
          style={{
                    opacity:.999,
                    transform: [{translate: [0, -3, 0]}, {scaleX:-1}],
                  }}
        />

      </View>
    );
  }
};

AppRegistry.registerComponent('RaignVR', () => RaignVR);
