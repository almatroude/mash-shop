//const Stack = createStackNavigator();
import { StatusBar } from 'react-native';
import React from 'react';

//screens
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import { Colors } from 'react-native/Libraries/NewAppScreen';

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
