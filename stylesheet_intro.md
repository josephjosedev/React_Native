import React from 'react'
import{
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native'
import { Colors } from 'react-native'
function AppPro():JSX.Element{
    const isDarkMode =useColorScheme()=== 'dark'
    return(
 <View style={styles.container}> 
    <Text style={isDarkMode?styles.whitetext:styles.whitetext}>Hello World</Text>
 </View>       
    ) 

}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
        

    },
    whitetext:{
        color:'black',

    },
    darkText:{
        color:'#000000'
    }
})
export default AppPro 