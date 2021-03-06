import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, Image} from 'react-native';
import {Header} from 'native-base';
import {Actions} from 'react-native-router-flux';
import imgLogo from '../imgs/planb.png';

export default class Cabecera3 extends Component {
  render() {
    return (
      <Header style={styles.header}>
        <Image source={imgLogo} style={styles.image}/>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white"
  },
  image: {
    width: 150,
    height: 60
  }
});

module.export = Cabecera3;
