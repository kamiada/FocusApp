import React from "react";
import { Text, TouchableOpacity, View, Image, ImageBackground } from "react-native";
import styles from "../stylesV2";
import AwesomeAlert from 'react-native-awesome-alerts';
import DropdownMenu from 'react-native-dropdown-menu';
import MainLogic from "./MainLogic";

class MainLogicV2 extends React.Component {
  constructor() {
    super();
    this.state = {
      text: 'START',
      selectedTime: '00:00:00',
    }
  }
  handlePress = ()=>{
    if (this.state.text === 'START' && this.state.selectedTime !=='00:00:00') 
    {
      this.setState({
          text: 'STOP'
      })
      let newSelectedTime = this.state.selectedTime.split(':');
      let minutes = parseInt(newSelectedTime[1]);
      //converts minutes to seconds
      let realTime = 60 * minutes;

      this._interval = setInterval(()=>{

        realTime = realTime-1;
        const resultMinutes = parseInt(realTime/60);
        //%divides full amount of seconds (45min = 2700 seconds) into 60s
        const resultSeconds = realTime % 60;
        console.log(resultMinutes);
        let result = "00"+":"+resultMinutes+":"+resultSeconds;
        this.setState({
          selectedTime: result
        })
      }, 1000)
    } 
      if(this.state.text === 'STOP'){
        this.setState({
          text:'START',
          selectedTime:'00:00:00'
        })
        clearInterval(this._interval);
      }
  }

  render() {
    const data = [["00:45:00", "01:00:00","00:01:50"]];
    return (
        <View style={{ flex: 1 }}>
          <View style={{ height: 64 }} />
          <View>
              <Text style={styles.timer}>{this.state.selectedTime}</Text>
            </View>
          <DropdownMenu
            style={styles.dropdownStyle}
            bgColor={'#AAF0C8'}
            tintColor={'#2D6949'}
            activityTintColor={'green'}
            handler={(selection,key) =>
              this.setState(
                {
                  selectedTime: data[selection][key],
                })}
            data={data}
          >
          </DropdownMenu>
          <View>
          <TouchableOpacity style={styles.image} onPress={this.handlePress}>
            <Text style={styles.lettering}>{this.state.text}</Text>
          </TouchableOpacity>
        </View>
        </View>
    );
  }
}
export default MainLogicV2;