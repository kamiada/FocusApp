import React from "react";
import { Text, TouchableOpacity, View, Image, ImageBackground } from "react-native";
import styles from "./styles";
import AwesomeAlert from 'react-native-awesome-alerts';
import DropdownMenu from 'react-native-dropdown-menu';

class MainLogic extends React.Component {
    constructor() {
        super();
        this.state = {
            text: 'START',
            hours: 0,
            minute: 0,
            seconds: 0,
            milisecond: 0,
            showAlert: false,
            pickedTime: '',
            pause: false
        }
    }
    checkInterval = () =>{
        if(this.state.pause === true){
            clearInterval(this._interval);
        }
    }

    showAlert = () => {
        this.setState({
            showAlert: true,
            pause: true
        })
        this.checkInterval();

    }
    hideAlert = () => {
        this.setState({
            showAlert: false,
            pause: false
        })
        this.checkInterval();
    }
    handlePress = () => {
        this.checkInterval();

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
        } if (this.state.text === 'STOP') {
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
        const formatTime = [["00:45:00", "01:00:00"]];
        return (
            <View style={styles.background}>
                <View style={{ flex: 1 }}>
                    <View>
                        <Text style={styles.timer}>{this.state.hours} : {this.state.minute} : {this.state.seconds} </Text>
                    </View>
                    <View style={{ height: 64 }} />
                    <DropdownMenu
                        style={styles.dropdownStyle}
                        bgColor={'#AAF0C8'}
                        tintColor={'#666666'}
                        activityTintColor={'green'}
                        handler={(selection) => this.setState({ pickedTime: formatTime[selection] })}
                        data={formatTime}
                    >
                    </DropdownMenu>
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
                        clearInterval(this._interval);
                    }}
                    onConfirmPressed={() => {
                        this.hideAlert();
                        this.resetState();
                    }}
                />
            </View>
        );
    }
}
export default MainLogic;