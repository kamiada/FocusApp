import {React} from "react";
import { TouchableWithoutFeedback, Text } from "react-native";
import styles from "../styles";
import { render } from "react-dom";

export class Timer extends React.Component(){
    //depending to user input - so props
    //count down the state
    //pure functionsd cannot use states
    render(){        
    return(
            <View style={styles.center}>
                <Text>{this.props.userInput}</Text>
            </View>
        );
    }
}