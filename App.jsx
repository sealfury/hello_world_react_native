import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux'
import ApplicationHeader from './components/ApplicationHeader'

const App = () => {
  const { appTitle } = useSelector(state => state)
  return (
    <View style={styles.container}>
      <ApplicationHeader />
      <Text>{appTitle}</Text>
      <StatusBar style="light" />
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

