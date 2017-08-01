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
} from 'react-vr';

export default class RaignVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('raign_background.jpg')}lit={true}/>

        <PointLight 
          angle={ 15  } 
          distance ={25} 
          decay ={2} 
          intensity = {2}
          penumbra = {50}
          style={{
              transform: [{translate: [0, 0, -4]}],
              color:"#e5d510"
            }}
            wireframe={true}
          />


        <Sphere
          radius={0.5}
          widthSegments={20}
          heightSegments={20}
          lit={true}
          style={{
              transform: [{translate: [0, 0, -5]}],
              color:"#e5d510"
            }}
        />

        <Image 
        source={asset('chair.png')}
          style={{
            width: 1, height: 1,
            opacity:.999,
            transform: [{translate: [0, 2, -10]}],
          }}/>
        <Plane
          dimWidth={10}
          dimHeight={14}
          lit={true}
          style={{
            opacity:.999,
            transform: [{translate: [0, 0, -20]}],
          }}
          texture={asset('chair.png')}
        />

        <Plane
          dimWidth={10}
          dimHeight={14}
          lit={true}
          style={{
            opacity:.999,
            transform: [{translate: [-10, 0, -20]}],
          }}
          texture={asset('chair.png')}
        />

        <Plane
          dimWidth={10}
          dimHeight={14}
          lit={true}
          style={{
            opacity:.999,
            transform: [{translate: [10, 0, -20]}],
          }}
          texture={asset('chair.png')}
        />

        <Plane
          dimWidth={9}
          dimHeight={10}
          lit={true}
          style={{
            opacity:.999,
            transform: [{translate: [1, -1, -19]}],
          }}
          texture={asset('rachel.png')}
        />
        
        <Plane
          dimWidth={10}
          dimHeight={3}
          lit={true}
          style={{
            opacity:.999,
            transform: [{translate: [0, 7, -17]}],
          }}
          texture={asset('logo.png')}
        />

        <Cylinder
          radiusTop={5}
          radiusBottom={5}
          dimHeight={20}
          segments={100}
          lit={true}
          side={'DoubleSide'}
          texture={asset('foreground.png')}
          style={{
                    opacity:.999,
                    transform: [{translate: [0, 0, 0]}],
                  }}
        />

        <Image
          style={{
            opacity:.999,
            transform: [{translate: [0, 0, -20]}],
          }}
          source={asset('chair.png')}
        />
        <Plane
          dimWidth={10}
          dimHeight={14}
          lit={true}
          style={{
            opacity:.999,
            transform: [{translate: [0, 0, -20]}],
          }}
          texture={asset('chair.png')}
        />

        <Text
          style={{
            fontSize: 0.2,
            layoutOrigin: [0, 0.5],
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 1, -1]}],
          }}>
          View Tracks
        </Text>

      </View>
    );
  }
};

AppRegistry.registerComponent('RaignVR', () => RaignVR);
