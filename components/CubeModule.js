
import * as THREE from 'three';
import { Module } from 'react-vr-web';

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