// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import {VRInstance} from 'react-vr-web';
import {Module} from 'react-vr-web';
import * as THREE from 'three';
import * as ReactVR from 'react-vr-web';
import * as OVRUI from 'ovrui';

function init(bundle, parent, options) {

  const scene = new THREE.Scene();
  const cubeModule = new CubeModule();

  const vr = new VRInstance(bundle, 'RaignVR', parent, {
    cursorVisibility: 'visible',
    nativeModules: [ cubeModule ],
    scene: scene,
  });

   const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial()
  );

   vr.render = function(timestamp) {
    const seconds = timestamp / 1000;
    cube.position.x = 0 + (1 * (Math.cos(seconds)));
    cube.position.y = 0.2 + (1 * Math.abs(Math.sin(seconds)));
  };

  cube.position.z = -4;
  scene.add(cube);
  cubeModule.init(cube);
  
  

  // Begin the animation loop
  vr.start();
  return vr;
}

export default class CubeModule extends Module {
  // CubeModule is a React Native Module, which implements functionality
  // that can be called asynchronously across the React Native brige.

  // Constructor calls super() with one argument: module name.
  constructor() {
    super('CubeModule');
  }

  // Called directly after the module is created.
  init(cube) {
    this.cube = cube;
  }

  // Change the cube material color to the given value.
  // Called remotely by the CubeModule on the React side.
  changeCubeColor(color) {
    // THREE.Color() accepts either a six-digit hex color or a CSS style.
    // e.g. 0xff0000, 'rgb(255,0,0)', 'red'
    this.cube.material.color = new THREE.Color(color);
  }
}


window.ReactVR = {init};
