```
import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() =>{
    SplashScreen.hide();
    },[]);
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Welocme NTBR 2025</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor:"white",
    flex:1,
    justifyContent:"center",
    alignItems:"center",

  },
  text1:{
    alignContent:"center",
    justifyContent:"center",
  }
})
```
