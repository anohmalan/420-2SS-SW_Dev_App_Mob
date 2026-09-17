import { View, TouchableHighlight } from 'react-native';
import { ButtonHighlight } from "../components/buttonHighlight";
import { GlobalStyles } from "./styles/globalStyles";
import { RecipesStyles } from './styles/recipesScreenStyles';
import { colors } from '../theme';
import { Ionicons } from '@expo/vector-icons';
import ToastManager, { Toast } from 'toastify-react-native'
import { useState } from 'react';

export default function RecipesScreen({ navigation }){

  const SEED_COUNT = 10;
  const SEED = [...Array(SEED_COUNT).keys()].map((item, index, array) => {
    const name = `A ${item}`
    return {
      category: parseInt(Math.random()*6),
      id: parseInt(Math.random(1)*10000),
      name: name,
      durationHours: parseInt(Math.random()*25),
      durationMinutes: parseInt(Math.random()*60),
      description: `Description ${name} `.repeat(index),
    }
  })

  const [recipes, setRecipes] = useState(SEED);

  function list(){
    if(recipes.length == 0){
      return (
        <View style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 48, color: 'gray' }}>No todos...</Text>
        </View>
      )
    }
  }

  // const recipes = [
  //   { name: "Poutine",
  //     durationHours: 0,
  //     durationMinutes: 10,
  //     description: "Frites, fromage en grain et sauce brune"
  //   },
  //   { name: "Poutine",
  //     durationHours: 0,
  //     durationMinutes: 10,
  //     description: "Frites, fromage en grain et sauce brune"
  //   }
  // ];
  // const options = recipes.map((recipe, index) => ({
  //   name: recipe.name,
  //   durationHours: recipe.durationHours,
  //   durationMinutes: recipe.durationMinutes,
  //   description: recipe.description
  // }));
  <TouchableHighlight>
    <View>

    </View>
  </TouchableHighlight>

}