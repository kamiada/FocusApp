import React from "react";
import {TouchableOpacity, View, Image, ImageBackground } from "react-native";
import styles from  "../stylesV2";


class PrettyCircle extends React.Component{
  render(){
    return(
      <View>
        <TouchableOpacity style={styles.circle}>

        </TouchableOpacity>
      </View>
    );
  }
}
export default PrettyCircle;