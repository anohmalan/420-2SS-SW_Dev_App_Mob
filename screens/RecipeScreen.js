import { View } from 'react-native';
import { useState } from 'react';
import   RadioGroup from 'react-native-radio-buttons-group';
import { TextComponent } from '../components/TextComponent';
import { InputRect } from "../components/InputRect";
import { ButtonHighlight } from "../components/ButtonHighlight";
import { GlobalStyles } from "./styles/globalStyles";
import { RecipeStyles } from './styles/recipeScreenStyles';
import { PickerGenerator } from '../components/PickerGenerator';
import { colors } from '../theme';
import { Toast } from 'toastify-react-native'
import * as CONST from '../constants/index'

export default function RecipeScreen({ navigation, route }){
  
  const PARAMS = route.params

  const [recipe, setRecipe] = useState(PARAMS?.recipe ?? CONST.EMPTY_RECIPE())

  function handleAdd() {
    if ((name?.trim() ?? '') == '') {
      Toast.error('Nom requis', 'bottom')
    }
    else if(category == false){
      Toast.error('Catégorie requise', 'bottom')
    }
    else if(durationHours + durationMinutes == 0){
      Toast.error('Durée supérieure à zéro requise', 'bottom')
    }
    else {
      recipe.category = category;
      recipe.name = name;
      recipe.durationHours = durationHours;
      recipe.durationMinutes = durationMinutes;
      recipe.description = description;
      setRecipe(CONST.EMPTY_RECIPE());
      navigation.popTo("RecipesScreen",{recipe: recipe});
    }
  }

  function handleDelete(){
    // const INDEX = PARAMS.index;
    // navigation.popTo("RecipesScreen",{recipeIndex: INDEX});
    navigation.popTo("RecipesScreen")
  }
  function buttonSaveDelete(){
    return(
      <>
        {PARAMS?.recipe ? 
          (
            <ButtonHighlight
              label="Delete"
              styleButton={[GlobalStyles.bouton, RecipeStyles.deleteButton]}
              onPress={handleDelete}
            /> ) : (
            <ButtonHighlight
              label="Save"
              styleButton={[GlobalStyles.bouton, RecipeStyles.saveButton]}
              onPress={handleAdd}
            />
          )
        }
      </>
    );
  }

  const handleDurationChange = (value, index) => {
    switch (index) {
      case 1:
        setDurationMinutes(value);
        break; 
      default:
        setDurationHours(value);
        break;
    };
  };

  const options = CONST.CATEGORIES.map((meal, index) => ({
    id: String(index + 1),
    label: meal.label,
    value: meal.value,
    color: colors.second
  }));

  const [name, setName] = useState(recipe.name);
  const [durationHours, setDurationHours] = useState(recipe.durationHours ?? 0);
  const [durationMinutes, setDurationMinutes] = useState(recipe.durationMinutes ?? 0);
  const [description, setDescription] = useState(recipe.description ?? "");
  const [category, setCategory] = useState(!!recipe.category && recipe.category);

 return (
    <View style={[GlobalStyles.container, RecipeStyles.container]}>
      <View style={RecipeStyles.radContainer}>
        <RadioGroup radioButtons={ options } 
          onPress={setCategory} selectedId={category}
          layout='row' labelStyle={{color: colors.second}} 
        />
      </View>
      <InputRect placeholder="Name" 
        value={name} 
        style={[RecipeStyles.nameInput]}
        onChangeText={(text) => {setName(text);
        }}
      />
  
      <View style={RecipeStyles.durationContainer}>

        <TextComponent label="Duration" style={{color: colors.second}}/>

        <View style={{ flex: 1 }}>
          <PickerGenerator 
            onValueChange={handleDurationChange} 
            ITEM_OPTIONS = {CONST.PICKER_OPTIONS} duration= {[durationHours,durationMinutes]}/>
        </View>
      
      </View>

      <InputRect  
        placeholder='Description' 
        value= {description} 
        style={RecipeStyles.descripInput} 
        multiline={ true }
        onChangeText={(text) => setDescription(text)} 
      />

      {buttonSaveDelete()}
      
    </View>
  );
}