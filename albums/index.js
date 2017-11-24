// import a library to help create a component

import React from 'react';
import { Text, AppRegistry } from 'react-native';

// create a components

const App = () => <Text>Some Text</Text>;

// render the component to the device

AppRegistry.registerComponent('albums', () => App);
