

import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Lista de productos </Text>
        <Button
        onPress={()=>{this.props.navigation.navigate('ProductsDetail')} }
        color='#ffff'
        title='Detalle'
         ></Button>

         <Button
        onPress={()=>{this.props.navigation.navigate('Drawer')} }
        color='#ffff'
        title='Open Menu'
         ></Button>
      </View>
    );
  }
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'green'
    },
    text:{
        color:'#fff',
        fontSize:30
    }
})

export default Products;
