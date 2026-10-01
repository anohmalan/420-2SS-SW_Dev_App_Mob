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
      
        <ButtonHighlight label={<FontAwesome6 name="add" size={30} color="white" />} styleText={{color: colors.move}} styleButton={{zIndex:10, position: 'absolute', end: 25, bottom:70, borderRadius: 999, height: 70, width: 70}}/>
     
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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
    <View style={GlobalStyles.container}>{list(recipes)}</View>
    
  );


}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     gap: 16,
//     justifyContent: 'center',
//     padding: 16,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: 'lightgray',
//     padding: 8,
//   },
//   text: {
//     fontSize: 15,
//     color: colors.textWhite
//   },
// });


function RecipeItem({recipe, ...otherProps}){
  const ICON = ["free-breakfast",'dinner-dining','lunch-dining']
  console.log("ok");
  console.log(recipe.category);
  return(
    console.log("hummc"),
    <TouchableHighlight >

        <View style={{flexDirection: 'row', }}>
          <View style={{alignItems: 'center', marginRight: 15, width: 60}}>
            <MaterialIcons name={recipe.category} size={24} color={colors.buttonPrimary} />
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


//   const SEED_COUNT = 10;
//   const SEED = [...Array(SEED_COUNT).keys()].map((item, index, array) => {
//     const name = `A ${item}`
//     const cat = parseInt(Math.random()*2 + 1)
//     const icon_meals = ["free-breakfast",'dinner-dining','lunch-dining'];
//     return {
//       category: icon_meals[cat],
//       id: parseInt(Math.random(1)*10000),
//       name: name,
//       durationHours: parseInt(Math.random()*25),
//       durationMinutes: parseInt(Math.random()*60),
//       description: `${name} `.repeat(8),
//     }
//   })

//   const [recipes, setRecipes] = useState(SEED);

//   function list(sortedRecipes) {
//   if (sortedRecipes.length === 0) {
//     return (
//       <View
//         style={{
//           flexGrow: 1,
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}
//       >
//         <Text style={{ fontSize: 48, color: 'gray' }}>
//           No recipes...
//         </Text>
//       </View>
//     );
//   }

//   return (
//     <View>
      
//       {/* <ScrollView style={{  }}>
//       {recipes.map((recipe) => {
//         return (
//           <View style={[GlobalStyles.container,{ width: "100%", padding: 10,gap:10, alignItems: 'flex-start'}]}>
//             <RecipeItem recipe={recipe}/>
//             <View style={{height: 2, width: "100%", backgroundColor: colors.textWhite}}></View>
//           </View>
          
//         );
//       })}
//     </ScrollView> */}
//          <FlatList

//         data={sortedRecipes}

//         renderItem={() => {
//           <RecipeItem recipe={sortedRecipes}/>
//         }}
//     />
      
//         <ButtonHighlight label={<FontAwesome6 name="add" size={30} color="white" />} styleText={{color: colors.move}} styleButton={{zIndex:10, position: 'absolute', end: 25, bottom:70, borderRadius: 999, height: 70, width: 70}}/>
     
//     </View>
//   );
// }

//   return(

//     list()
    
//   );
  

  // const recipes = [
  //   { category: "Breakfast"
  //     name: "Poutine",
  //     durationHours: 0,
  //     durationMinutes: 10,
  //     description: "Frites, fromage en grain et sauce brune"
  //   },
  //   { category: "Breakfast"
  //       name: "Poutine",
  //     durationHours: 0,
  //     durationMinutes: 10,
  //     description: "Frites, fromage en grain et sauce brune"
  //   },
  // { category: "Breakfast"
  //    name: "Poutine",
  //     durationHours: 0,
  //     durationMinutes: 10,
  //     description: "Frites, fromage en grain et sauce brune"
  //   },
  // ];
  // const options = recipes.map((recipe, index) => ({
  //   name: recipe.name,
  //   durationHours: recipe.durationHours,
  //   durationMinutes: recipe.durationMinutes,
  //   description: recipe.description
  // }));