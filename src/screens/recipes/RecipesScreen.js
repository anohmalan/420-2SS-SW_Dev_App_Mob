import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import { ButtonHighlight } from "../../components/ButtonHighlight";
import { RecipesStyles } from '../styles/recipesScreenStyles';
import { colors,iconSizes,fontSizes } from '../../theme';
import { GlobalStyles } from "../styles/globalStyles";
import { FontAwesome6 } from '@expo/vector-icons';
import { useState } from 'react';
import * as React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import RecipeItem from './RecipeItem';
import { Toast } from 'toastify-react-native';
import auth from '../../services/auth'
import {RecipeService} from '../../services/recipe';



export default function RecipesScreen({ navigation, route }){
  const params = route.params
  const [recipes, setRecipes] = useState([]);
  const recipe = new RecipeService();

  // Charger les recettes d'un User
  useFocusEffect(
    React.useCallback(() => {
      loadRecipes();
    }, [])
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

  // Suppression d'un recette
  React.useEffect(() => {
    const recipe_to_delete = params?.recipe_to_delete;
    if (recipe_to_delete) {
      setRecipes((currentRecipes) =>
        currentRecipes.filter((recipe) => recipe.id !== Number(recipe_to_delete.id))
      );
    }
  }, [params?.recipe_to_delete]);

  async function loadRecipes() {
    try {
      const recipes = await recipe.selectAll();
      setRecipes(recipes);
    } catch (error) {
      Toast.error("Impossible de charger les recettes",bottom)
    }
  }

  function handleLogout(){
    auth.logOut()   
    navigation.replace('LoginScreen')   
  }

  function handleView(item) {
    navigation.navigate("RecipeScreen",
      {
        recipe: item,
      }
    );
  }

  function handleAdd() {
    navigation.push("RecipeScreen");
  }

  function list() {
    return (
      <View style={{flex:1,width: "95%"}}>
        <FlatList
          ListEmptyComponent={
            <View style={RecipesStyles.flatListVide}>
              <Text style={{fontSize: fontSizes.xyz, color: colors.textWhite }}>
                No recipes...
              </Text>
            </View>
          }
          contentContainerStyle={recipes.length == 0 && {flexGrow:1}}
          ItemSeparatorComponent={ () => <View style={{ height: 2, backgroundColor: 'white',justifyContent: 'center' }}/> }
          data={recipes}

          renderItem={({item}) => {
            return(
              <TouchableHighlight onPress={()=>handleView(item)} underlayColor={colors.press} style={RecipesStyles.itemList}>
                <RecipeItem item={item}key={item.id}/>
              </TouchableHighlight>
            )
          }}
        />       
      </View>
    );
  }

  return(
    <View style={[GlobalStyles.container,{justifyContent: 'flex-start', padding:0}]}>
      {list()}
      <ButtonHighlight onPress={handleAdd} 
        label={<FontAwesome6 name="add" size={iconSizes.xl} color="white" />} 
        styleText={{color: colors.move}} 
        styleButton={RecipesStyles.buttonAdd}
      />
    </View>   
  );

}