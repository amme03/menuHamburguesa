

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ProductsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Producto</Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'red'
    },
    text:{
        color:'#fff',
        fontSize:30
    }
})

export default ProductsDetail;
