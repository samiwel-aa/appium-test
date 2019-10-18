## Setup

### iOS

#### Prerequisites

1. Install Carthage

    ```
    brew install carthage
    ```
   
 1. Ensure that all other dependencies are installed
 
    ```
    appium-doctor --ios
    ```

### Android

#### Prerequisites

1. Install a Java runtime environment.

1. Install Android SDK and create an Android Virtual Device (emulator).
   This can be done via the Android Device Manager (adm) tool or via the GUI provided by Android Studio.
   
#### Installation
   
1. `yarn install`

1. `export ANDROID_HOME=~/Library/Android/sdk`

1. `export JAVA_HOME=$(/usr/libexec/java_home)`

1. `export PATH=${JAVA_HOME}/bin:$PATH`

1. `appium-doctor --android` to verify dependencies are set up correctly.

#### Running the tests

1. Run the Android emulator.

1. Ensure you download the correct version of Chromedriver for the version of Chrome installed on the Android emulator. In my case this was [74.0.3729.6](https://chromedriver.storage.googleapis.com/index.html?path=74.0.3729.6/) 

1. Start Appium 
    ```
    appium --chromedriver-executable ~/Downloads/chromedriver
    ```

1. Launch the test app
    ```
    PORT=3001 yarn start 
    ```

1. Run the test

    ```
    yarn test
    ```
