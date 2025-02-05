import React from 'react';
import IntroScreen from './Screens/OnBoarding/intro';
import WelcomeScreen from './Screens/OnBoarding/welcome';
import LoginScreen from './Screens/Authentication/login';
import RegisterScreen from './Screens/Authentication/register';
import HomeScreen from './Screens/Home/home';
import Settings from './Screens/Settings/settings';
import AboutUs from './Screens/Settings/aboutus';
import Help from './Screens/Settings/help';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Intro" component={IntroScreen}/>
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Profile" component={Settings}/>
        <Stack.Screen name="AboutUs" component={AboutUs}/>
        <Stack.Screen name="Help" component={Help}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
