import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import styles from "../styles";

class Button extends React.Component {
    render(){
        return(
            <View style={styles.button}>
            <TouchableOpacity>
                <Image source={require("../assets/Button.png")}/>
            </TouchableOpacity>
          </View>
        );
    }
}
export default Button;