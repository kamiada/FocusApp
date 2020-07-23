import React from "react";
import { Text, TouchableOpacity, View, Image, ImageBackground } from "react-native";
import styles from "../styles";
import AwesomeAlert from 'react-native-awesome-alerts';

class MainLogic extends React.Component {
    constructor() {
        super();
        this.state = {
            text: 'START',
            hours: 0,
            minute: 0,
            seconds: 0,
            milisecond: 0,
            showAlert: false
        }
    }
    showAlert = () => {
        this.setState({
            showAlert: true
        })
    }
    hideAlert = () => {
        this.setState({
            showAlert: false
        })
    }
    handlePress = () => {
        if (this.state.text === 'START') {
            this.setState({
                text: 'STOP'
            })
            this._interval = setInterval(() => {
                this.setState({
                    milisecond: this.state.milisecond + 1
                })
                if (this.state.milisecond >= 50) {
                    this.setState({
                        milisecond: this.state.milisecond = 0,
                        seconds: this.state.seconds + 1
                    })
                }
                if (this.state.seconds === 60) {
                    this.setState({
                        seconds: this.state.seconds = 0,
                        minute: this.state.minute + 1
                    })
                }
                if (this.state.minute === 60) {
                    this.setState({
                        minute: this.state.minute = 0,
                        hours: this.state.hours + 1
                    })
                }
            })
        } if(this.state.text ==='STOP'){
            this.showAlert();
        }
    }
    resetState = () => {
        this.setState({
            text: 'START',
            milisecond: this.state.milisecond = 0,
            seconds: this.state.seconds = 0,
            minute: this.state.minute = 0,
            hours: this.state.hours = 0
        })
        clearInterval(this._interval);
    }
    render() {
        const { showAlert } = this.state;
        return (
            <View style={styles.background}>
                <View>
                    <Text style={styles.timer}>{this.state.hours} : {this.state.minute} : {this.state.seconds} </Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.circle}>
                        <View style={styles.center}>
                            <ImageBackground style={styles.water} source={{ uri: 'https://priteshgupta.com/demos/fill/waves.png', }} />
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={this.handlePress} style={styles.image}>
                    <Text style={styles.text}>{this.state.text}</Text>
                </TouchableOpacity>
                <AwesomeAlert
                    show={showAlert}
                    showProgress={false}
                    title="Warning"
                    message="Are you sure you want to exit?"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={true}
                    showConfirmButton={true}
                    cancelText="No, I don't"
                    confirmText="Yes, I want to exit"
                    confirmButtonColor="#DD6B55"
                    onCancelPressed={() => {
                        this.hideAlert();
                    }}
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                />
            </View>
        );
    }
}
export default MainLogic;