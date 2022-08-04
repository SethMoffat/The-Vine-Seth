import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import {useState} from 'react'
import {WebView} from 'react-native-webview'






export default function App() {

  return (
    
    
      <View style={styles.container}>
      <View>
      <Button title="screen1" style={{display: "flex", justifyContent: "space-evenly", alignItems: "flex-start", zIndex:2}}/>
      </View>
    
      
      <View style={{height:"100%", width:"100%", marginTop: 100}}>
      
      <WebView style={{zIndex:1}} source={{uri: "https://www.youtube.com/"}}/>
      
    </View>
    </View>

      
    

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