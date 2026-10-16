import { View } from 'react-native';
import { useState } from 'react';
import   RadioGroup from 'react-native-radio-buttons-group';
import { TextComponent } from '../../components/TextComponent';
import { InputRect } from "../../components/InputRect";
import { ButtonHighlight } from "../../components/ButtonHighlight";
import { GlobalStyles } from "../styles/globalStyles";
import { RecipeStyles } from '../styles/recipeScreenStyles';
import { PickerGenerator } from '../../components/PickerGenerator';
import { colors } from '../../theme';
import { Toast } from 'toastify-react-native';
import * as CONST from '../../constants/index';
import { RecipeService } from '../../services/recipe';

export default function RecipeScreen({ navigation, route }){
  
  const PARAMS = route.params

  const [recipe, setRecipe] = useState(PARAMS?.recipe ?? CONST.EMPTY_RECIPE())
  const recipeService = new RecipeService()

  
  async function handleAdd() {
    if ((name?.trim() ?? '') === '') {
      Toast.error('Nom requis', 'bottom');
    } else if (category === false) {
      Toast.error('Catégorie requise', 'bottom');
    } else if (duration_hours + duration_minutes === 0) {
      Toast.error('Durée supérieure à zéro requise', 'bottom');
    } else {
      const updatedRecipe = {
        ...recipe,
        category,
        name: name.trim(),
        duration_hours,
        duration_minutes,
        description,
      };

      try {
        const newRecipes = await recipeService.add(updatedRecipe);

        updatedRecipe.id = newRecipes.lastInsertId;

        setRecipe(CONST.EMPTY_RECIPE());

        navigation.popTo('RecipesScreen', {
          recipe: updatedRecipe,
        });

        Toast.success('Recette ajoutée avec succès');
      } catch (error) {
        console.error(error);
        Toast.error('Impossible d’ajouter la recette', 'bottom');
      }
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
        setDuration_minutes(value);
        break; 
      default:
        setDuration_hours(value);
        break;
    };
  };

  const options = CONST.CATEGORIES.map((meal, index) => ({
    id: index + 1,
    label: meal.label,
    value: meal.value,
    color: colors.second
  }));

  const [name, setName] = useState(recipe.name);
  const [duration_hours, setDuration_hours] = useState(recipe.duration_hours ?? 0);
  const [duration_minutes, setDuration_minutes] = useState(recipe.duration_minutes ?? 0);
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
            ITEM_OPTIONS = {CONST.PICKER_OPTIONS} duration= {[duration_hours,duration_minutes]}/>
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