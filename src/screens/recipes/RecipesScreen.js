import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import { ButtonHighlight } from "../../components/ButtonHighlight";
import { RecipesStyles } from '../styles/recipesScreenStyles';
import { colors,iconSizes,fontSizes } from '../../theme';
import { GlobalStyles } from "../styles/globalStyles";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { useState } from 'react';
import * as React from 'react';

export default function RecipesScreen({ navigation, route }){
  const params = route.params
  const [recipes, setRecipes] = useState([
    {
      category: "1",
      name: "Poutine",
      durationHours: 0,
      durationMinutes: 10,
      description: "Frites, fromage en grain et sauce brune, puis "
    },
    {
      category: "2",
      name: "Pizza",
      durationHours: 1,
      durationMinutes: 20,
      description: "Pizza au fromage"
    },
    {
      category: "3",
      name: "Burger",
      durationHours: 0,
      durationMinutes: 30,
      description: "Burger avec frites"
    }
  ]);
  const sortedRecipes = [...recipes].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  // Bouton Logout
  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (    
        <ButtonHighlight label={"Log out"} 
          styleText={{color: colors.textWhite}} 
          styleButton={[RecipesStyles.logoutButton]}
          onPress={handleLogout}
        />
      ),
      headerBackVisible: false,
    });
  },[]);

  //Ajout d'une recette
  React.useEffect(() => {
    const recipe = params?.recipe
    if (recipe) {
      setRecipes([...recipes, params.recipe]);
    }
  }, [params?.recipe]);

  // Suppression d'un recette
  React.useEffect(() => {
    const recipeIndex = params?.recipeIndex;

    if (recipeIndex !== undefined) {
      setRecipes((currentRecipes) =>
        currentRecipes.filter((_, index) => index !== Number(recipeIndex))
      );
    }
  }, [params?.recipeIndex]);

  function handleLogout(){
    return(     
      navigation.replace('LoginScreen')   
    );
  }

  function handleView(index) {
    navigation.navigate("RecipeScreen",{
        recipe: sortedRecipes[index],
        index: index
      }
    );
  }

  function handleAdd() {
    navigation.push("RecipeScreen");
  }

  function list(sortedRecipes) {
    const ICON = ["free-breakfast",'dinner-dining','lunch-dining']
    const ICON_COLOR = [colors.breakfast,colors.dinner, colors.lunch]
  
    return (
      <View style={{width: "95%"}}>
        <FlatList style={{ }}
          ListEmptyComponent={
            <Text style={{ fontSize: fontSizes.xyz, color: colors.textWhite }}>
              No recipes...
            </Text>
          }
          ItemSeparatorComponent={ () => <View style={{ height: 2, backgroundColor: 'white' }}/> }
          data={sortedRecipes}

          renderItem={({item, index,}) => {
            return(
              <TouchableHighlight onPress={()=>handleView(index)} underlayColor={colors.press} style={RecipesStyles.itemList}>

                <View style={{flexDirection: 'row'}}>
                  <View style={RecipesStyles.timeIconContainer}>
                    <MaterialIcons name={ICON[item.category-1]} size={iconSizes.m} color={ICON_COLOR[item.category-1]} />
                    <View >
                      <Text style={{color: colors.textWhite, }}>
                        {item.durationHours}h{String(item.durationMinutes).padStart(2, '0')}
                      </Text>
                    </View>
                  </View>

                  <View style={{height: 'auto', flex:1}}>
                    <Text style={RecipesStyles.recipeName}>{ item.name }</Text>
                  
                    <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: fontSizes.md, color: colors.textWhite }} >
                      {item.description}
                    </Text>
                    
                  </View>           
                </View>  
              </TouchableHighlight>
            )
          }}
        />       
      </View>
    );
  }

  return(
    <View style={[GlobalStyles.container,{justifyContent: 'flex-start', padding:0}]}>
      {list(sortedRecipes)}
      <ButtonHighlight onPress={handleAdd} 
        label={<FontAwesome6 name="add" size={iconSizes.xl} color="white" />} 
        styleText={{color: colors.move}} 
        styleButton={RecipesStyles.buttonAdd}
      />
    </View>   
  );

}