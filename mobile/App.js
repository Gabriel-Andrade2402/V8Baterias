import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type {Node} from 'react';
import Home from './src/Screens/Home';
import Menu from './src/Screens/Menu';
import Help from './src/Screens/Help';
import Login from './src/Screens/Login';
import Registry from './src/Screens/Registry';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
              name = "Home"
              component = {Home}
              options={{
                headerShown:false
              }}
          />
          <Stack.Screen 
              name = "Menu"
              component = {Menu}
          />
          <Stack.Screen 
              name = "Help"
              component = {Help}
              
          />
          <Stack.Screen 
              name = "Login"
              component = {Login}
              
          />
          <Stack.Screen 
              name = "Registry"
              title = "Cadastrar-se"
              component = {Registry}
              
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
