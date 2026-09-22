import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from './theme';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './screens/loginScreen';
import SignupScreen from './screens/signupScreen';
import RecipeScreen from './screens/recipeScreen';
import RecipesScreen from './screens/recipesScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{
        headerStyle: {
          backgroundColor: colors.move,
          height: 60
        },
        headerTintColor: colors.textWhite,
        
      }}>
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{title: "Login"}}/>
        <Stack.Screen name='SignupScreen' component={SignupScreen} options={{title: "Signup"}}/>
        <Stack.Screen name='RecipeScreen' component={RecipeScreen} options={{title: "Recipe"}}/>
        <Stack.Screen name='RecipesScreen' component={RecipesScreen} options={{title: "Recipes"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}