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
            <TouchableHighlight onPress={() => {
              // Stop Animation
              this._waveRect && this._waveRect.stopAnim();

              // set water baseline height
              this._waveRect && this._waveRect.setWaterHeight(70);

              // reset wave effect
              this._waveRect && this._waveRect.setWaveParams([
                { A: 10, T: 180, fill: '#FF9F2E' },
                { A: 15, T: 140, fill: '#F08200' },
                { A: 20, T: 100, fill: '#B36100' },
              ]);
            }}>
              <Wave
                ref={ref => this._waveRect = ref}
                // style={styles.wave}
                H={30}
                waveParams={[
                  { A: 10, T: 180, fill: '#62c2ff' },
                  { A: 15, T: 140, fill: '#0087dc' },
                  { A: 20, T: 100, fill: '#1aa7ff' },
                ]}
                animated={true}
              />
            </TouchableHighlight>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default PrettyCircle;