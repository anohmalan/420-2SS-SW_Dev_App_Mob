import { View, TouchableHighlight, ScrollView, StyleSheet, Text } from 'react-native';
import { ButtonHighlight } from "../components/buttonHighlight";
import { GlobalStyles } from "./styles/globalStyles";
import { RecipesStyles } from './styles/recipesScreenStyles';
import { colors } from '../theme';
import { Ionicons } from '@expo/vector-icons';
import ToastManager, { Toast } from 'toastify-react-native'
import { useState } from 'react';

function RecipeItem({recipe, ...otherProps}){
  console.log("ok");
  console.log(recipe);
  return(
    console.log("hummc"),
    <TouchableHighlight >

        <View style={{alignItems: 'flex-start', height: 'auto',borderWidth:2, borderColor: 'red',justifyContent:'flex-start'}}>
                <Text style={[styles.text, { fontWeight: 'bold' }]}>{ recipe.name }</Text>
                {
                  !!recipe.description &&
                    <Text style={ styles.text }>{ recipe.description }</Text>
                }
            </View>
     
  </TouchableHighlight>
  );

}

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
      description: `${name} `.repeat(index),
    }
  })

  const [recipes, setRecipes] = useState(SEED);

  function list() {
  if (recipes.length === 0) {
    return (
      <View
        style={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{ fontSize: 48, color: 'gray' }}>
          No recipes...
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      {recipes.map((recipe) => {
        return (
          <View style={[GlobalStyles.container,{ width: "100%", display: 'flex',borderWidth:2, borderColor: 'orange', alignItems: 'flex-start'}]}>
            <RecipeItem recipe={recipe}/>
          <View style={{height: 2, width: "100%", backgroundColor: '#000000'}}></View>
          </View>
          
        );
      })}
    </ScrollView>
  );
}

  return(

    list()
    
  );
  

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


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 8,
  },
  text: {
    fontSize: 18,
  },
});