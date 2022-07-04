/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/components/LoginForm/LoginForm';
import Todos from './src/components/Todos/Todos';
import {Provider} from 'react-redux';
import {store} from './src/components/redux/Store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Todos} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
