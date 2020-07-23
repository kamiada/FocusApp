import React from "react";
import { TouchableWithoutFeedback, Text, View } from "react-native";
import styles from "../styles";
import { Picker } from '@react-native-community/picker';

class DropdownThing extends React.Component {
  constructor() {
    super();
    this.state = {
      dropdown: [{
        id: 1,
        hours: 1,
        minute: 20,
        seconds: 0,
        miliseconds: 0,
      },
      {
        id: 2,
        hours: 0,
        minute: 20,
        seconds: 0,
        miliseconds: 0
      }
      ],
      option1: 1
    }
  }
  render() {
    const { dropdown } = this.state;
    console.log(JSON.stringify(dropdown[0]));
    const options = JSON.stringify(dropdown[0]).toString();
    return (
      <View>
        <Picker
          selectedValue={dropdown[0].value}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ options: itemValue })
          }>
          <Picker.Item label={this.state.option1.toString()} value={this.state.option1.toString()}/>
          <Picker.Item label={options} value={options} />
        </Picker>
      </View>
    );
  }
}
export default DropdownThing;