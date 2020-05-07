# therAPPy

In order to start the file, please refer to the 'How to install expo' documentation for more specific details.
https://reactnative.dev/docs/0.24/getting-started

Here are the instructions that our team members followed in order to simulate the app through expo.

1. Have nodejs installed (i needed a version 13.x.x so you might wanna google an installation for yourself)
2. Install expo globally onto your computer 'npm install -g expo-cli'
3. Clone the repository onto your local drive and open up the project folder with the IDE of your choice. (Works smoothly with VScode for us)


Once those files have been downloaded the commands in the terminal of your IDE of project root folder:
1. 'expo install' -> Install expo into the project on your local drive
2. 'npm install' -> Download all necessary dependencies
3. Now Download Expo Client on your mobile device via the app store. It is much easier than running an emulator from your computer. 
4. 'expo start' -> Which launches a QR code in the IDE's terminal. Scan it with the camera app on your phone to launch the simulator in expo client. 

A test account which you can use is

username: marsic@isastud.com
password: test12

username:  ariela.chomski@gmail.com
password: test123

username: test@test.com 
password: 123456



However we believe that the tester should create their own account to have their own experience with our application. 



* Unit Tests *

The Unit Tests that were created for this project were render tests of each aspect of our application. This test simply checks if each page renders as it should. There were some issues with this test where some pages come up as a fail in the test and this outcome is expected. Instructions of how to run are located below:

To run the tests install jest globally:
npm install jest --global

and then run the following command while in the root folder of the code for our project:
jest --updateSnapshot

7 should fail and the rest should pass



* Integration Tests * 
There was difficulty understanding and writing a test that integrated the individual unit tests written and it was brought to a conclusion that the best way to do so was to have the app be run in order to demonstrate the integration of the separate units in the application. 

* OTHER NOTES *

Here are the two github repositories for our code for the first demo. They are in separate files because we were unable to merge both projects due to compatibility issues.


https://github.com/louishinohara/therAPPy_data_visualization
https://github.com/scorrette/se-health-app

fin

