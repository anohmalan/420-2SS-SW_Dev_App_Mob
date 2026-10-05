import { View, Text, FlatList } from 'react-native';
import { ButtonHighlight } from "../components/ButtonHighlight";
import { GlobalStyles } from "./styles/globalStyles";
import { RecipesStyles } from './styles/recipesScreenStyles';
import { colors } from '../theme';
import { fontSizes } from '../theme';
import { Ionicons,MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { TouchableHighlight } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import * as React from 'react';

export default function RecipesScreen({ navigation, route }){

    function list(sortedRecipes) {
      const ICON = ["free-breakfast",'dinner-dining','lunch-dining']
  if (sortedRecipes.length === 0) {
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
    <View>
         <FlatList
          ItemSeparatorComponent={ () => <View style={{ height: 2, backgroundColor: 'white' }}/> }
        data={sortedRecipes}

        renderItem={({item, index,}) => {
          return(
            <TouchableHighlight onPress={()=>handleView(index)} style={{minHeight: 70, alignContent: 'center', justifyContent:'center'}}>

              <View style={{flexDirection: 'row',}}>
                <View style={{alignItems: 'center', marginRight: 15, width: 60}}>
                  <MaterialIcons name={ICON[item.category-1]} size={24} color={colors.buttonPrimary} />
                  <View >
                    <Text style={{color: colors.textWhite, }}>{item.durationHours}h{item.durationMinutes}</Text>
                  </View>
                </View>

                <View style={{height: 'auto'}}>
                  <Text style={{ fontWeight: 'bold', flex: 1, verticalAlign: 'bottom', color: colors.textWhite, fontSize: 16}}>{ item.name }</Text>
                  {
                    !!item.description &&
                      <Text style={ {fontSize: 15,color: colors.textWhite} }>{ item.description }</Text>
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

  React.useEffect(() => {
    const recipeIndex = params?.recipeIndex

    if (params?.recipe) {
      setRecipes([...recipes, params.recipe,]);
    }
    else if(toString(recipeIndex)){
      setRecipes((currentRecipes) =>
      currentRecipes.filter((_, index) => index !== recipeIndex));
    }
  }, [params]);

  const [recipes, setRecipes] = useState([
    
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
    <View style={GlobalStyles.container}>
      {list(sortedRecipes)}
      <ButtonHighlight onPress={handleAdd} label={<FontAwesome6 name="add" size={30} color="white" />} styleText={{color: colors.move}} styleButton={{zIndex:10, position: 'absolute', end: 25, bottom:70, borderRadius: 999, height: 70, width: 70}}/>
    </View>   
  );


}
