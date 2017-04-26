/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Navigator

} from 'react-native';
import Ha from'./components/screen/Ha.js'
import Manhinh2 from'./components/screen/Manhinh2.js'

   console.disableYellowBox = true;
class seminar extends Component {
renderScene(route,navigator)
{
  switch (route.name) {
    case "ha":return (<Ha onbuttonPress= {()=>{navigator.push({name:"manhinh2"});}}/>);
      break;
    case "manhinh2":return (<Manhinh2 ontxtPress= {()=>{navigator.push({name:"ha"});}}/>);
        break;


  }
}
  render() {
    return (
      /*<View style={ao.khung}>
       <Ha/>
      </View>*/
      <Navigator initialRoute={{name:"ha"}}
      renderScene={this.renderScene}
      />
    );
  }
}


AppRegistry.registerComponent('seminar', () => seminar);
