```
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
    <View style={styles.child1}></View>
    <View style={styles.child2}></View>
    <View style={styles.child3}></View>
    </View>
    
  );
};

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  child1:{
    backgroundColor:"red",
    flex:1,

  },
  child2:{
    backgroundColor:"yellow",
    flex:2,
  },
  child3:{
    backgroundColor:"black",
    flex:1,
  },
});
```
