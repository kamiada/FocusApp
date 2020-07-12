import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import styles from "../styles";

class Button extends React.Component {
    constructor(){
        super();
        this.state = {
            text : 'Start'
        }
    }
    handlePress = () => {
        if(this.state.text === 'Start'){
            this.setState ({
                text : 'Stop'
            })
        }
        else if(this.state.text === 'Stop'){
            this.setState({
                text: 'Start'
            })
        }
    }
    render(){
        return(
            <View style={styles.button}>
            <TouchableOpacity onPress={this.handlePress}>
                <Text>{this.state.text}</Text>
                <Image source={require("../assets/Button.png")}/>
            </TouchableOpacity>
          </View>
        );
    }
}
export default Button;