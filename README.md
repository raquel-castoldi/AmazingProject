# Lab Assignment 1: Spinning Up React Native App

## System requirements for React Native Development on Windows
**CPU:** A multi-core processor is recommended. An Intel Core i5 or i7, or an equivalent AMD processor, should work well. <br>

**RAM:** A minimum of 8 GB of RAM is recommended for smooth development. <br>

**Operating System:** You can develop React Native applications on Windows 7 or newer. However, Windows 10 is recommended for the best compatibility and performance.<br>

## Installation instructions
### React Native Environment Setup
#### Node, JDK
We recommend installing Node via Chocolatey, a popular package manager for Windows.<br>
React Native also requires Java SE Development Kit (JDK), which can be installed using Chocolatey as well.<br>

Open an Administrator Command Prompt (right click Command Prompt and select "Run as Administrator"), then run the following command: <br>

`choco install -y nodejs-lts microsoft-openjdk11`

## Android development environment
### Install Android Studio
Download and install Android Studio. While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked: <br>
*	Android SDK
*	Android SDK Platform
*	Android Virtual Device

Then, click "Next" to install all of these components. <br>
Once setup has finalized and you're presented with the Welcome screen, proceed to the next step.
Install the Android SDK <br>

Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 13 (Tiramisu) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio. <br>

To do that, open Android Studio, click on "More Actions" button and select "SDK Manager". <br>

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 13 (Tiramisu) entry, then make sure the following items are checked:<br>

*	Android SDK Platform 33
*	Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image

Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the Android SDK Build-Tools entry, then make sure that 33.0.0 is selected. <br>

Finally, click "Apply" to download and install the Android SDK and related build tools.
Configure the ANDROID_HOME environment variable <br>

The React Native tools require some environment variables to be set up in order to build apps with native code. <br>

1.	Open the Windows Control Panel.
2.	Click on User Accounts, then click User Accounts again
3.	Click on Change my environment variables
4.	Click on New... to create a new ANDROID_HOME user variable that points to the path to your Android SDK:
The SDK is installed, by default, at the following location: %LOCALAPPDATA%\Android\Sdk

Open a new Command Prompt window to ensure the new environment variable is loaded before proceeding to the next step.
1.	Open powershell
2.	Copy and paste Get-ChildItem -Path Env:\ into powershell
3.	Verify ANDROID_HOME has been added
4. Add platform-tools to Path
1.	Open the Windows Control Panel.
2.	Click on User Accounts, then click User Accounts again
3.	Click on Change my environment variables
4.	Select the Path variable.
5.	Click Edit.
6.	Click New and add the path to platform-tools to the list.
The default location for this folder is: %LOCALAPPDATA%\Android\Sdk\platform-tools
React Native Command Line Interface
Creating a new application
If you previously installed a global react-native-cli package, please remove it as it may cause unexpected issues: npm uninstall -g react-native-cli @react-native-community/cli

React Native has a built-in command line interface, which you can use to generate a new project. You can access it without installing anything globally using npx, which ships with Node.js. Let's create a new React Native project called "Amazing Project":<br>
`npx react-native@latest init Amazing Project`

## Preparing the Android device
### Using a virtual device
If you use Android Studio to open ./Amazing Project/android, you can see the list of available Android Virtual Devices (AVDs) by opening the "AVD Manager" from within Android Studio. <br>

If you have recently installed Android Studio, you will likely need to create a new AVD. Select "Create Virtual Device...", then pick any Phone from the list and click "Next", then select the Tiramisu API Level 33 image. <br>
Click "Next" then "Finish" to create your AVD. At this point you should be able to click on the green triangle button next to your AVD to launch it, then proceed to the next step. <br>

## Running your React Native Application
### Start the Metro Server
First, you will need to start Metro, the JavaScript bundler that ships with React Native.
To start Metro, run the following command from the root of your React Native project:<br>

`npm start`

### Start your Application
Let Metro Bundler run in its own terminal. Open a new terminal from the root of your React Native project. Run the following command to start your Android app: <br>

`npm run android`

If everything is set up correctly, you should see your new app running in your Android Emulator or iOS Simulator shortly provided you have set up your emulator/simulator correctly.
This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively. <br>

### Modifying your App
Now that you have successfully run the app, let's modify it. <br>
Open App.tsx in your text editor of choice and edit some lines. <br>
Press the R key twice or select "Reload" from the Developer Menu (Ctrl + M) to see your changes!<br>

**Now you’re done!**

## Resources
### To install Chocolatey
Input the following command into an administrative shell of command: <br>
 
`@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"`

### To download Android Studio:
https://developer.android.com/studio?gclid=Cj0KCQiAgK2qBhCHARIsAGACuzn-BfbgNeWaoNk8n4oDvppzC40WoQHJstCp6iZdkRp3yoQJtH3a0RAaAqYOEALw_wcB&gclsrc=aw.ds

## Bibliography
Setting up the development environment · REACT NATIVE. React Native RSS. (2023, August 29). https://reactnative.dev/docs/environment-setup?guide=native&amp;os=windows&amp;platform=android
 
