import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import styles from "../styles";

class Alert extends React.Component {
constructor(){
  super();
  this.state ={
    showAlert: false
  }
}

render(){
  return(
    <View>
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
export default Alert;