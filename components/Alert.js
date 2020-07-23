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
      title="AwesomeAlert"
      message="I have a message for you!"
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={false}
      showCancelButton={true}
      showConfirmButton={true}
      cancelText="No, cancel"
      confirmText="Yes, delete it"
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