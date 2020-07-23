import React from 'react';
import { View } from 'react-native';
import MainLogic from './components/MainLogic';
import DropdownThing from './components/DropdownThing';
import styles from './styles';
import {LinearGradient} from 'expo-linear-gradient'

export default function App() {
  return (
    <View style={styles.container}>
    <LinearGradient colors={['#A2CEEF','#AAF0C8' ]} style={styles.gradient}/>
      <DropdownThing/>
  </View>
  );
}
