import React from 'react';
import { View } from 'react-native';
import MainLogic from './testing_grounds/MainLogic';
import MainLogicV2 from './components/MainLogicV2';
import styles from './testing_grounds/styles';
import {LinearGradient} from 'expo-linear-gradient'

export default function App() {
  return (
    <View style={styles.container}>
    <LinearGradient colors={['#A2CEEF','#AAF0C8' ]} style={styles.gradient}/>
      <MainLogicV2/>
  </View>
  );
}
