import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type {Node} from 'react';
import Home from './src/Screens/Home';
import Menu from './src/Screens/Menu';
import About from './src/Screens/About';
import Login from './src/Screens/Login';
import Registry from './src/Screens/Registry';
import Location from './src/Screens/Location';
import EditProfile from './src/Screens/EditProfile';
import EditPassword from './src/Screens/EditPassword';
import PaymentForm from './src/Screens/PaymentForm';
import Address from './src/Screens/Address';
import Requests from './src/Screens/Requests';
import Cart from './src/Screens/Cart';

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
              name = "About"
              component = {About}
              
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
          <Stack.Screen 
              name = "Location"
              title = "Localizações"
              component = {Location}
              
          />
          <Stack.Screen 
              name = "EditProfile"
              title = "EditProfile"
              component = {EditProfile}
              
          />
          <Stack.Screen 
              name = "EditPassword"
              title = "EditPassword"
              component = {EditPassword}
          />
          <Stack.Screen 
              name = "PaymentForm"
              title = "PaymentForm"
              component = {PaymentForm}
              
          />
          <Stack.Screen 
              name = "Address"
              title = "Address"
              component = {Address}
              
          />
          <Stack.Screen 
              name = "Requests"
              title = "Requests"
              component = {Requests}
              
          />
          <Stack.Screen 
              name = "Cart"
              title = "Cart"
              component = {Cart}
              
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
