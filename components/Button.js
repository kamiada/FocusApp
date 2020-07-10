import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import styles from "../styles";

class Button extends React.Component {
    handlePress = () => {}
    render(){
        return(
            <View style={styles.button}>
            <TouchableOpacity onPress={this.handlePress}>
                <Text>Start</Text>
                <Image source={require("../assets/Button.png")}/>
            </TouchableOpacity>
          </View>
        );
    }
}
export default Button;