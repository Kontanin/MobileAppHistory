import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Button } from 'react-native';
import Test from './component/Main';
import EmploymentHistoryScreen from './component/Second';
import GuessNumberGame from './component/Four';
import CertificationScreen from './component/Third';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Test} />
        <Stack.Screen name="History" component={EmploymentHistoryScreen} />
        <Stack.Screen name="Certifications" component={CertificationScreen} />
        <Stack.Screen name="Game" component={GuessNumberGame} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
