✅ 1. Prepare Your App for Release
a) Generate a Keystore
You need a signing key to generate a release APK.

bash
Copy
Edit
```
keytool -genkeypair -v -keystore my-release-key.keystore -alias my-key-alias \
  -keyalg RSA -keysize 2048 -validity 10000
```
Save this .keystore file in your project at: android/app/my-release-key.keystore.


b) Edit android/gradle.properties
Add the following at the bottom:

ini
Copy
Edit
```
MYAPP_UPLOAD_STORE_FILE=my-release-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=your_store_password
MYAPP_UPLOAD_KEY_PASSWORD=your_key_password
```
c) Edit android/app/build.gradle
Find the android { ... } section and update the signingConfigs and buildTypes like:

gradle
Copy

Edit
```
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                storeFile file(MYAPP_UPLOAD_STORE_FILE)
                storePassword MYAPP_UPLOAD_STORE_PASSWORD
                keyAlias MYAPP_UPLOAD_KEY_ALIAS
                keyPassword MYAPP_UPLOAD_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...
```

Generating the release AAB
```
npx react-native build-android --mode=release
```
✅ 2. Clean and Build the APK
In your project root:


```
cd android
./gradlew clean
./gradlew assembleRelease
```
Now you can find apk on
android/app/build/outputs/apk/release/app-release.apk

for reference
[link1](https://youtu.be/gAxqc8-12iA?si=jy2hEfxCley29pzi)
