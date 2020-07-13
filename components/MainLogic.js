import React from "react";
import { Text, TouchableOpacity, View, Image, ImageBackground } from "react-native";
import styles from "../styles";
import Timer from "./Timer";

class MainLogic extends React.Component {
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
            <View style={styles.center}>
            <View>
                <TouchableOpacity style={styles.circle}>
                <View style={styles.center}>
                <ImageBackground style={styles.water} source={{ uri: 'https://priteshgupta.com/demos/fill/waves.png',}}/>
                </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={this.handlePress} style={styles.image}>
                <Text style={styles.text}>{this.state.text}</Text>
            </TouchableOpacity>
          </View>
        );
    }
}
export default MainLogic;