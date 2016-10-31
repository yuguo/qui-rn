import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import colors from '../config/colors';

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginLeft: 10
  },
  cell: {
    height: 46,
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  }
});

export default class TextCell extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <TouchableOpacity
        style={styles.cell}
        onPress={() => {
          this.props.onForward(this.props.children);
        }}>
        <Text style={styles.title}>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }
}
