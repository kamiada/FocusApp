import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainLogic from './components/MainLogic';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#A2CEEF','#AAF0C8' ]}> 
    <View style={styles.background}>
      <MainLogic/>
    </View>
    </LinearGradient>
  );
}
