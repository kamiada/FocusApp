import React from "react";
import { Text, TouchableOpacity, View, Image, ImageBackground } from "react-native";
import styles from "../styles";
import {LinearGradient} from 'expo-linear-gradient'


class MainLogic extends React.Component {
    constructor(){
        super();
        this.state = {
            text : 'START',
            hours: 0,
            minute: 0,
            seconds: 0,
            milisecond :0
        }
    }
    handlePress = () => {
        if(this.state.text === 'START'){
            this.setState ({
                text : 'STOP'
            })
            this._interval = setInterval(()=>{
                this.setState({
                    milisecond: this.state.milisecond +1
                })
                if(this.state.milisecond >=1000){
                    this.setState({
                        milisecond: this.state.milisecond = 0,
                        seconds: this.state.seconds + 1
                    })
                }
                if(this.state.seconds === 60){
                    this.setState({
                        seconds: this.state.seconds = 0,
                        minute: this.state.minute + 1
                    })
                }
                if(this.state.minute === 60){
                    this.setState({
                        minute: this.state.minute = 0,
                        hours: this.state.hours + 1
                    })
                }
            })
        }
        else if(this.state.text === 'STOP'){
            this.setState({
                text: 'START',
                milisecond: this.state.milisecond = 0,
                seconds: this.state.seconds = 0,
                minute: this.state.minute = 0,
                hours: this.state.hours = 0
            })
            clearInterval(this._interval);
        }
    }
    render(){
        return(
            <View style={styles.background}>
            <View>
            <Text style={styles.timer}>{this.state.hours} : {this.state.minute} : {this.state.seconds} </Text>
            </View>
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