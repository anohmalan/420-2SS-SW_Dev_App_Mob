import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import { ButtonHighlight } from "../components/ButtonHighlight";
import { RecipesStyles } from './styles/recipesScreenStyles';
import { colors,iconSizes,fontSizes } from '../theme';
import { GlobalStyles } from "./styles/globalStyles";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { useState } from 'react';
import * as React from 'react';

export default function RecipesScreen({ navigation, route }){

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
  });

  React.useEffect(() => 
    {
      const recipeIndex = params?.recipeIndex

      if (params?.recipe) {
        setRecipes([...recipes, params.recipe,]);
      }
      else if(toString(recipeIndex)){
        setRecipes((currentRecipes) =>
        currentRecipes.filter((_, index) => index !== recipeIndex));
      }
    }, [params]
  );

  function list(sortedRecipes) {
    const ICON = ["free-breakfast",'dinner-dining','lunch-dining']
    const ICON_COLOR = [colors.breakfast,colors.dinner, colors.lunch]
    
    if (sortedRecipes.length === 0) {
      return (
        <View
          style={RecipesStyles.containerListVide}
        >
          <Text style={{ fontSize: fontSizes.xxl, color: colors.textWhite }}>
            No recipes...
          </Text>
        </View>
      );
    }

    return (
      <View style={{width: 310}}>
        <FlatList style={{ }}
          ItemSeparatorComponent={ () => <View style={{ height: 2, backgroundColor: 'white' }}/> }          data={sortedRecipes}

          renderItem={({item, index,}) => {
            return(
              <TouchableHighlight onPress={()=>handleView(index)} style={RecipesStyles.itemList}>

                <View style={{flexDirection: 'row'}}>
                  <View style={RecipesStyles.timeIconContainer}>
                    <MaterialIcons name={ICON[item.category-1]} size={iconSizes.m} color={ICON_COLOR[item.category-1]} />
                    <View >
                      <Text style={{color: colors.textWhite, }}>
                        {String(item.durationHours).padStart(2, '0')}h{String(item.durationMinutes).padStart(2, '0')}
                      </Text>
                    </View>
                  </View>

                  <View style={{height: 'auto'}}>
                    <Text style={RecipesStyles.recipeName}>{ item.name }</Text>
                  
                    {
                      !!item.description &&
                      <Text style={{ fontSize: fontSizes.md, color: colors.textWhite }}>
                        {item.description?.length > 35
                          ? item.description.substring(0, 35) + '...'
                          : item.description
                        }
                      </Text>
                    }
                    
                  </View>           
                </View>  
              </TouchableHighlight>
            )
          }}
        />       
      </View>
    );
  }

  const params = route.params

  function handleLogout(){
    return(     
      navigation.replace('LoginScreen')   
    );
  }

  const [recipes, setRecipes] = useState([
    {
      category: "1",
      name: "Poutine",
      durationHours: 0,
      durationMinutes: 10,
      description: "Frites, fromage en grain et sauce brune"
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

  function handleView(index) {
    if (recipes.length === 0) {
      return;
    } 

    navigation.navigate("RecipeScreen",{
        recipe: recipes[index],
        index: index
      }
    );
  }

  function handleAdd() {
    navigation.push("RecipeScreen");
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