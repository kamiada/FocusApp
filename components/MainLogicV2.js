import React from "react";
import { Text, TouchableOpacity, View, Image, ImageBackground } from "react-native";
import styles from "../stylesV2";
import DropdownMenu from 'react-native-dropdown-menu';
import PrettyCircle from './PrettyCircle';
import AwesomeAlert from 'react-native-awesome-alerts';

class MainLogicV2 extends React.Component {
  constructor() {
    super();
    this.state = {
      text: 'START',
      selectedTime: '00:00:00',
      showAlert: false,
      pause: false
    }
  }
  showAlert = () => {
    this.setState({
      showAlert: true,
      //somehow ignores this set state?!
      pause: true
    })
    console.log('showAlert', this.state.pause);
    this.checkInterval();
  }
  hideAlertConfirm = () => {
    this.setState({
      showAlert: false,
      pause: false
    })
    this.resetState();
  }
  hideCancelAlert = () => {
    this.setState({
      showAlert: false,
      pause: false
    }) 
    // this.checkInterval();
  }


  startCountdown = () => {
    let newSelectedTime = this.state.selectedTime.split(':');
    let minutes = parseInt(newSelectedTime[1]);
    //converts minutes to seconds
    let realTime = 60 * minutes;
    this._interval = setInterval(() => {
      realTime = realTime - 1;
      const resultMinutes = parseInt(realTime / 60);
      //%divides full amount of seconds (45min = 2700 seconds) into 60s
      const resultSeconds = realTime % 60;
      let result = "00" + ":" + resultMinutes + ":" + resultSeconds;
      this.setState({
        selectedTime: result
      })

      if (result.toString() === "00:0:0" || resultMinutes <= 0 && resultSeconds <= 0) {
        this.setState({
          text: 'START',
          selectedTime: '00:00:00'
        })
        clearInterval(this._interval);

      }
    }, 1000)
  }

  checkInterval = () => {
    const { pause } = this.state;
    // pause === true ? clearInterval(this._interval) : console.log(pause);


    if (pause === true) {
      clearInterval(this._interval);
      console.log('checkInterval', pause);
    }else{
      // this.startCountdown();
      console.log('else', pause);
    }
  }

  handlePress = () => {
    if (this.state.text === 'START' && this.state.selectedTime !== '00:00:00') {
      this.setState({
        text: 'STOP',
        pause: false
      })
      this.startCountdown();
    }
    if (this.state.text === 'STOP') {
      this.showAlert();
    }
  }
  resetState = () => {
    this.setState({
      text: 'START',
      selectedTime: '00:00:00',
      pause: false
    })
    clearInterval(this._interval);
  }
  render() {
    const { showAlert } = this.state;
    const data = [["00:45:00", "00:25:00", "00:01:50", "00:00:05"]];
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 64}} />
        <View style={styles.background}>
          <Text style={styles.timer}>{this.state.selectedTime}</Text>
        </View>
        <DropdownMenu
          style={styles.dropdownStyle}
          useNativeDriver= {true}
          bgColor={'#AAF0C8'}
          tintColor={'#2D6949'}
          activityTintColor={'green'}
          handler={(selection, key) =>
            this.setState(
              {
                selectedTime: data[selection][key],
              })}
          data={data}
        >
        </DropdownMenu>

        <View style={{flex:2}}>
        <PrettyCircle />
        </View>

        <View style={styles.background}>
          <TouchableOpacity style={styles.button} onPress={this.handlePress}>
            <Text style={styles.lettering}>{this.state.text}</Text>
          </TouchableOpacity>
        </View>
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
            this.hideCancelAlert();
          }}
          onConfirmPressed={() => {
            this.hideAlertConfirm();
          }}
        />
      </View>
    );
  }
}
export default MainLogicV2;