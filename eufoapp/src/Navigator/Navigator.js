import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import HomeView from '../HomeView/HomeView';
import LoginView from '../LoginView/LoginView';
import CadastroView from '../CadastroView/CadastroView';


const stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='TelaHome'>
        <stack.Screen name="TelaHome" component={HomeView} />
        <stack.Screen name="TelaLogin" component={LoginView} />
        <stack.Screen name="TelaCadastro" component={CadastroView} />
      </stack.Navigator>
    </NavigationContainer>
  );
}



export default Navigator