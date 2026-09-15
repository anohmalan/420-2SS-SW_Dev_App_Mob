import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {RadioGroup} from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';
import { TextComponent } from './components/TextComponent';
import { InputRect } from './components/InputRect';
import { ButtonHighlight } from './components/ButtonHighlight';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/loginScreen';
import SignupScreen from './screens/signupScreen';
import RecipeScreen from './screens/recipeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  // const SCREEN = 1;
  // <StatusBar style="auto" />
  // switch (SCREEN) {
  //   case 1:
  //     return ScreenOne();
  //   case 2:
  //     return ScreenTwo(); 
  //   case 3:
  //     return ScreenThree();  
  //   default:
  //     break;
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen'>
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{title: "Login"}}/>
        <Stack.Screen name='SignupScreen' component={SignupScreen} options={{title: "Signup"}}/>
        <Stack.Screen name='RecipeScreen' component={RecipeScreen} options={{title: "Recipe"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#387E7F',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   body: {
//     flex: 1,
//     width:'90%',
//     height: 'auto',
//     gap: "5%",
//     padding: 5
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: 'lightgray',
//     padding: 8,
//     color:"#FFFFFF",
//     height: '6%' , 
//     width: '70%'
//   },
//   descripInput:{
//     width: '100%', 
//     height: '55%', 
//     verticalAlign: 'top'
//   },

//   text: {
//     fontSize: 18,
//   },
//   bouton:{
//     backgroundColor: "#F2A93B", 
//     width: "auto",
//     padding: 10,
//     alignItems: 'center', 
//     height: "6%", 
//     justifyContent: "center", 
//     borderRadius: 3
//   },
//   textComponent: {color: "#FFFFFF", fontSize: 16, fontWeight: 'bold'}
// });
