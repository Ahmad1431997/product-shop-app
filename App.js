import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./components/Home"
import ShopList from './components/ShopList';
import { Provider } from "react-redux";
import store from "./store/reducers/index";
import { NativeBaseProvider } from 'native-base';
import ShopDetail from './components/ShopDetail';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './components/Navigation';

export default function App() {
  return (
      <Provider store={store}>
        <NativeBaseProvider>
        
      <NavigationContainer>
    {/* <View style={styles.container}> */}
        <StackNavigator/>
      
    {/* </View> */}
      <StatusBar style="auto" />
      </NavigationContainer>
        </NativeBaseProvider>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
