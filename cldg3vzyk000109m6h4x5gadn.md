# Start First React Native App and Debugging (Ubuntu)

### **STEP 1:create a project called** AwesomeProject

```bash
npx react-native init AwesomeProject
```

### **Step 3:Check and confirm USB debugging /Developer option Enable**

```bash
adb devices
```

If you have a physical Android device, the device name listed here

### Step 3: Start your application

```bash
npx react-native run-android
```

### **Errors encountered while creating the app**

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1674918854073/d5de5e8d-fd51-4c63-a85d-23e1bf1d2e39.png align="center")

Solution:create ***local.properties*** inside ***android*** folder in react native project

```bash
sdk.dir=/home/to/Android/Sdk
```

Then run again the command"**npx react-native run-android**"

OR

Start Metro:First, you will need to start Metro, the JavaScript bundler that ships with React Native. Metro "takes in an entry file and various options, and returns a single JavaScript file that includes all your code and its dependencies."

To start Metro, run `npx react-native start` inside your React Native project folder:

```bash
npx react-native start
```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1674919371644/05234b8f-1628-4207-8b32-0e2bb2bbde9f.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1674919431208/494623c8-b20c-44ba-a496-d17e7db09e23.png align="center")

Now i can see my app and my app is running fine. enjoy!!