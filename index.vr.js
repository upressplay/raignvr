import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Plane,
  Cylinder,
  AmbientLight,
} from 'react-vr';

export default class RaignVR extends React.Component {
  render() {
    return (
      <View>
        <Plane
          dimWidth={10}
          dimHeight={14}
          lit={false}
          style={{
            opacity:.999,
            transform: [{translate: [0, 0, -20]}],
          }}
          texture={asset('chair.png')}
        />

        <Plane
          dimWidth={9}
          dimHeight={10}
          lit={false}
          style={{
            opacity:.999,
            transform: [{translate: [1, -1, -19]}],
          }}
          texture={asset('rachel.png')}
        />
        <AmbientLight intensity={ 1 }  />
        <Plane
          dimWidth={10}
          dimHeight={3}
          lit={false}
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
          texture={asset('foreground.png')}
          style={{
                    opacity:.999,
                    transform: [{translate: [0, 0, -10]}],
                  }}
        />

      </View>
    );
  }
};

AppRegistry.registerComponent('RaignVR', () => RaignVR);
