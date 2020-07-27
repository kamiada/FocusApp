import React from "react";
import { Text, TouchableOpacity, View, Image, ImageBackground } from "react-native";
import styles from "../stylesV2";
import AwesomeAlert from 'react-native-awesome-alerts';
import DropdownMenu from 'react-native-dropdown-menu';
import MainLogic from "./MainLogic";
import PrettyCircle from './PrettyCircle';

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
        let result = "00"+":"+resultMinutes+":"+resultSeconds;
        this.setState({
          selectedTime: result
        })

        if(result.toString() === "00:0:0" || resultMinutes <=0 && resultSeconds <=0)
        {
          this.setState({
          text:'START',
          selectedTime:'00:00:00'
        })
          clearInterval(this._interval);

        }
      }, 1000)
    } 
      if(this.state.text === 'STOP'){
        // this.setState({
        //   text:'START',
        //   selectedTime:'00:00:00'
        // })
        // clearInterval(this._interval);
        this.resetState();
      }
  }
  resetState = () =>{
    this.setState({
      text:'START',
      selectedTime:'00:00:00'
    })
    clearInterval(this._interval);
  }
  render() {
    const data = [["00:45:00", "00:25:00","00:01:50", "00:00:05"]];
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

         <PrettyCircle/>

          <View>
          <TouchableOpacity style={styles.button} onPress={this.handlePress}>
            <Text style={styles.lettering}>{this.state.text}</Text>
          </TouchableOpacity>
        </View>
        </View>
    );
  }
}
export default MainLogicV2;