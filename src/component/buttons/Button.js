import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import colors from '../config/colors';
import Color from 'color';

const styles = StyleSheet.create({
  button: {
    padding: 19,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5
  },
  text: {
    color: 'white',
    fontSize: 18
  },
  disabled: {
    backgroundColor: colors.btDisabled
  },
  disabledText: {
    color: colors.btDisabledText
  }
});

export default class Button extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const {type, onPress, onLongPress, text, bgColor, disabled} = this.props;

    /* 自定义背景色，或读取type */
    let backgroundColor,
        borderStyle,
        borderTextStyle;
    if(bgColor){
      backgroundColor = bgColor;
    }else{
      switch (type) {
        case 'red':
          backgroundColor = colors.btRed;
          break;
        case 'blue':
          backgroundColor = colors.btBlue;
          break;
        default:
          backgroundColor = 'white';
          borderStyle = {
            borderWidth: 0.5,
            borderColor: colors.btWhiteLine
          };
          borderTextStyle = {
            color: 'black',
          }
      }
    }

    let underlayColor = Color(backgroundColor).darken(0.1).hexString();

    return(
      <TouchableHighlight
        style={[
          styles.button,
          {backgroundColor: backgroundColor},
          borderStyle,
          disabled && styles.disabled
        ]}
        activeOpacity={1}
        disabled={disabled}
        onLongPress={onLongPress}
        onPress={onPress}
        underlayColor={underlayColor}
      >
          <Text style={[
              styles.text,
              borderTextStyle,
              disabled && styles.disabledText
            ]}
          >
            {text}
          </Text>
      </TouchableHighlight>
    )
  }
}
