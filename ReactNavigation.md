```
import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name ="Login" component={LoginScreen} />
      <Stack.Screen name ="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({});

const LoginScreen=({}) => {
  const navigation= useNavigation();
  return(
    <View>
      <Text>Login Screen</Text>
      <Button title='Home' onPress={()=>
      
      {navigation.navigate("Home");
    }}></Button>
    </View>
  );
}

const HomeScreen=({navigation}) => {
  return(
    <View>
      <Text>Home Screen</Text>
      <Button title='back to login' onPress={()=>{navigation.navigate('Login');}}></Button>
    </View>
  );
}

```
