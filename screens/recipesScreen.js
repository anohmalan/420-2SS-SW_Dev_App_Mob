import { View, TouchableHighlight, ScrollView, StyleSheet, Text } from 'react-native';
import { ButtonHighlight } from "../components/buttonHighlight";
import { GlobalStyles } from "./styles/globalStyles";
import { RecipesStyles } from './styles/recipesScreenStyles';
import { colors } from '../theme';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import ToastManager, { Toast } from 'toastify-react-native'
import { useState } from 'react';

function RecipeItem({recipe, ...otherProps}){
  const ICON = ["cafe-outline",]
  console.log("ok");
  console.log(recipe.category);
  return(
    console.log("hummc"),
    <TouchableHighlight >

        <View style={{flexDirection: 'row', }}>
          <View style={{alignItems: 'center', marginRight: 15, width: 60}}>
            <Ionicons name="checkmark-circle" size={22} color= {colors.buttonPrimary} />
            <View >
              <Text style={{color: colors.textWhite, }}>{recipe.durationHours}h{recipe.durationMinutes}</Text>
            </View>
          </View>

          <View style={{height: 'auto'}}>
            <Text style={{ fontWeight: 'bold', flex: 1, verticalAlign: 'bottom', color: colors.textWhite, fontSize: 16}}>{ recipe.name }</Text>
            {
              !!recipe.description &&
                <Text style={ styles.text }>{ recipe.description }</Text>
            }
          </View>
          
        </View>
     
  </TouchableHighlight>
  );

}

export default function RecipesScreen({ navigation }){

  const SEED_COUNT = 10;
  const SEED = [...Array(SEED_COUNT).keys()].map((item, index, array) => {
    const name = `A ${item}`
    return {
      category: parseInt(Math.random()*5 + 1),
      id: parseInt(Math.random(1)*10000),
      name: name,
      durationHours: parseInt(Math.random()*25),
      durationMinutes: parseInt(Math.random()*60),
      description: `${name} `.repeat(8),
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
          <View style={[GlobalStyles.container,{ width: "100%", padding: 10,gap:10, alignItems: 'flex-start'}]}>
            <RecipeItem recipe={recipe}/>
            <View style={{height: 2, width: "100%", backgroundColor: colors.textWhite}}></View>
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
    fontSize: 15,
    color: colors.textWhite
  },
});