# Hello World Using React Native

```bash
import React from 'react'
import {
  View,
  Text,
  SafeAreaView

} from 'react-native'
function App(){
return(
  <SafeAreaView>
  <View>
    <Text> Hello World!</Text>
    <Text> Hello World!</Text>
    <Text> Hello World!</Text>
    <Text> Hello World!</Text>
    <Text> Hello World!</Text>
  </View>
</SafeAreaView>
)
}

export default App;
```

Explanation:

* `import React from 'react'`: This line imports the `React` library, which is necessary for building React applications.
    
* `import { View, Text, SafeAreaView } from 'react-native'`: This line imports three components, `View`, `Text`, and `SafeAreaView`, from the `react-native` library. `View` and `Text` are basic building blocks for creating a user interface in React Native, while `SafeAreaView` is a component that helps ensure your content is not obscured by the notch on an iPhone or the status bar on Android.
    
* `function App()`: This line defines a functional component `App`, which returns a user interface using the imported components.
    
* `<SafeAreaView>...</SafeAreaView>`: This component is used as the root component to ensure that the content inside it is not obscured by the device's notch or status bar.
    
* `<View>...</View>`: This component is used to create a container for the user interface.
    
* `<Text>...</Text>`: This component is used to display text on the screen.
    
* `export default App`: This line exports the `App` component as the default export, making it possible to use the component in other parts of the application.
    

<mark>Output</mark>

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1675188009112/ba3256ac-9041-450f-8e14-9898ff82aa7a.png align="center")