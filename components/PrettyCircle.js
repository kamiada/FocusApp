import React from "react";
import { TouchableOpacity, View, Image, ImageBackground, TouchableHighlight } from "react-native";
import styles from "../stylesV2";
import Wave from "react-native-waveview";


class PrettyCircle extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.circle}>

          <View style={styles.wave_container}>
              <Wave
                ref={ref => this._waveRect = ref}
                style={styles.waveball}
                H={30}
                waveParams={[
                  { A: 10, T: 180, fill: '#62c2ff' },
                  { A: 15, T: 140, fill: '#0087dc' },
                  { A: 20, T: 100, fill: '#1aa7ff' },
                ]}
                animated={true}
              />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default PrettyCircle;