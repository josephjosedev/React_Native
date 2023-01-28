# Start First React Native App and Debugging

### **STEP 1:create a folder called react native**

```bash
npx react-native init AwesomeProject
```

### Step 2: Start your application

```bash
npx react-native run-android
```

### **Step 3:Check and confirm USB debugging /Developer option Enable**

```bash
adb devices
```

In ubuntu "npx react-native run-android" shows error

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1674918854073/d5de5e8d-fd51-4c63-a85d-23e1bf1d2e39.png align="center")

Solution:create ***local.properties*** inside ***android*** folder in react native project

```bash
sdk.dir=/home/to/Android/Sdk
```

Then run again the command"**npx react-native run-android**"

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1674919371644/05234b8f-1628-4207-8b32-0e2bb2bbde9f.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1674919431208/494623c8-b20c-44ba-a496-d17e7db09e23.png align="center")

Now i am able to see my app and my app is running absolutely fine.