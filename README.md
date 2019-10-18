## Setup

When the tests run, both the iOS and Android simulators are spun up and the test is run. Follow the instructions below to ensure that you have configured your environment correctly for both iOS and Android simulators.

### Install dependencies

```
yarn install
```

### iOS

#### Prerequisites

1. Install Carthage
    ```
    brew install carthage
    ```
   
1. Install xcode and the iOS simulator.
   
1. Ensure that all other dependencies are installed
    ```
    appium-doctor --ios
    ```

### Android

#### Prerequisites

1. Install a Java runtime environment.

1. Install Android SDK and create an Android Virtual Device (emulator).
   This can be done via the Android Device Manager (adm) tool or via the GUI provided by Android Studio.
   
  Make a note of your Android virtual device name and the SDK version (these need to be replaced in [wdio.conf.js](wdio.conf.js)).
   
#### Configuration
   
1. Tell Appium where to find the Android SDK
    ```
    export ANDROID_HOME=~/Library/Android/sdk
    ```

1. Tell Android where to find Java
    ```
    export JAVA_HOME=$(/usr/libexec/java_home)
    ```

1. Ensure Java executables are on the PATH
    ```
    export PATH=${JAVA_HOME}/bin:$PATH
    ```

1. Verify all dependencies are set up correctly for Android
    ```
    appium-doctor --android
    ```
   
1. Download the correct version of Chromedriver for the version of Chrome installed on your Android Virtual Device
    
   In my case this was [74.0.3729.6](https://chromedriver.storage.googleapis.com/index.html?path=74.0.3729.6/)
   
   You will need to configure the path to Chromedriver executable in [wdio.conf.js](wdio.conf.js).

### Running the tests

1. Launch the test app
    ```
    PORT=3001 yarn start 
    ```

1. Run the test
    ```
    yarn test
    ```
