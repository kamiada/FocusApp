import React from "react";
import { TouchableWithoutFeedback, Text, View } from "react-native";
import styles from "../styles";
import DropdownMenu from 'react-native-dropdown-menu';

class DropdownThing extends React.Component {
  constructor() {
    super();
    this.state = {
      dropdownSelection: [{
        hours: 1,
        minute: 20,
        seconds: 0,
        miliseconds: 0,
      },
      {
        hours: 0,
        minute: 20,
        seconds: 0,
        miliseconds: 0
      }
      ],
      option1: 1,
      option2:[[
        1,
        2,
        'test3'
      ]],
      text: ''
    }
  }
  render() {
    const { dropdownSelection } = this.state;
    var data = [["C", "Java", "JavaScript", "PHP"]];
    const formatTime = [["00:45:00", "01:00:00"]];
    let result = dropdownSelection.map(a => a);
    return (
      <View style={{flex: 1}}>
       <View style={{height: 64}} />
        <DropdownMenu
          style={{flex: 1}}
          bgColor={'white'}
          tintColor={'#666666'}
          activityTintColor={'green'}
          handler={(selection) => this.setState({text: formatTime[selection]})}
          data={formatTime}
        >
        </DropdownMenu>
      </View>
    );
  }
}
export default DropdownThing;