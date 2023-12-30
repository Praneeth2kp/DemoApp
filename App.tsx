import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from './components/Welocme';
import Login from './components/Login';
import Filter from './pages/Filter';
import Search from './pages/Search';
import Home from './pages/Home';
import Tour from './pages/Tour';
import Booknow from './pages/BookNow';
import Property from './pages/Property';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Filter" component={Filter} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Property" component={Property} />
        <Stack.Screen name="Booknow" component={Booknow} />
        <Stack.Screen name="Tour" component={Tour} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
