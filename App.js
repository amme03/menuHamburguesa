
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Drawer} from './src/navigation'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Drawer></Drawer>
    );
  }
}


