import React,{Component} from "react";
import {
  View,Text,StyleSheet,Button,TextInput,Alert
} from "react-native";
import styles from "../styles/styles";

export default class Manhinh2 extends Component
{
  constructor(props) {
    super(props);
    this.state = { text: 'Nhap username' ,txt:'Nhap password'};
  }
  render(){
    return(

      <View style={styles.color3}>
      <Text>WELCOM TO MY PAGE </Text>
      <Text onPress={this.props.ontxtPress}>Back</Text>

      </View>

    );
  }
}
