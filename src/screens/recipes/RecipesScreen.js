import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import { ButtonHighlight } from "../../components/ButtonHighlight";
import { RecipesStyles } from '../styles/recipesScreenStyles';
import { colors,iconSizes,fontSizes } from '../../theme';
import { GlobalStyles } from "../styles/globalStyles";
import { FontAwesome6 } from '@expo/vector-icons';
import { useState } from 'react';
import * as React from 'react';
import RecipeItem from './RecipeItem';
import { Toast } from 'toastify-react-native';
import auth from '../../services/auth'
import {RecipeService} from '../../services/recipe';



export default function RecipesScreen({ navigation, route }){
  const params = route.params
  const [recipes, setRecipes] = useState([]);
  const recipe = new RecipeService();

  // Charger les recettes d'un User
  React.useEffect(() => {
    loadRecipes();
  }, []);
 
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

  function list(sortedRecipes) {
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

          renderItem={({item}) => {
            return(
              <TouchableHighlight onPress={()=>handleView(item)} underlayColor={colors.press} style={RecipesStyles.itemList}>
                <RecipeItem item={item}/>
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