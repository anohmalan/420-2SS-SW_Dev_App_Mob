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
import Recipe from '../../models/recipe'

export default function RecipeScreen({ navigation, route }){
  
  const PARAMS = route.params

  const [recipe, setRecipe] = useState(() => new Recipe(PARAMS?.recipe))
  const recipeService = new RecipeService()

  function updateRecipe(field, value) {
    setRecipe((currentRecipe) => {
      const updatedRecipe = new Recipe(currentRecipe);
      updatedRecipe[field] = value;
      return updatedRecipe;
    });
  }

  function validRecipe() {
    const formRecipe = new Recipe(recipe);
    formRecipe.duration_hours ??= 0;
    formRecipe.duration_minutes ??= 0;
    formRecipe.description ??= '';
    formRecipe.name = formRecipe.name.trim();

    const errorMessage = formRecipe.validate();
    if (errorMessage) {
      Toast.error(errorMessage, 'bottom');
      return null;
    }

    return formRecipe;
  }

  async function handleAdd() {
    const addRecipe = validRecipe();
    if (!addRecipe) return;

    try {
      const response = await recipeService.add(addRecipe);
      addRecipe.id = response.lastInsertId;

      setRecipe(new Recipe());

      navigation.popTo('RecipesScreen', {
        recipe: addRecipe,
      });

      Toast.success('Recette ajoutée avec succès');
    } catch (error) {
      console.error(error);
      Toast.error('Impossible d’ajouter la recette', 'bottom');
    }
  }

  async function handleSave() {
    const updatedRecipe = validRecipe();
    if (!updatedRecipe) return;

    try {
      await recipeService.update(updatedRecipe);

      setRecipe(new Recipe());

      navigation.popTo('RecipesScreen', {
        recipe: updatedRecipe,
      });

      Toast.success('Recette modifiée avec succès');
    } catch (error) {
      console.error(error);
      Toast.error('Impossible de modifier la recette', 'bottom');
    }
  }


  async function handleDelete(){
      try {
        const deleteRecipe = await recipeService.delete(recipe);

        navigation.popTo("RecipesScreen",{recipe_to_delete: recipe});

        Toast.success('Recette supprimée avec succès');
      } catch (error) {
        console.error(error);
        Toast.error('Impossible de supprimer la recette', 'bottom');
      }
  }
  
  function buttonSaveDelete(){
    return(
      <>
        {PARAMS?.recipe ? 
          (
            <View style={{flex: 1, flexDirection: 'row', gap: 10}}>
              <ButtonHighlight
                label="Delete"
                styleButton={[GlobalStyles.bouton, RecipeStyles.deleteButton]}
                onPress={handleDelete}
              />
              <ButtonHighlight
                label="Save"
                styleButton={[GlobalStyles.bouton, RecipeStyles.saveButton]}
                onPress={handleSave}
              />
            </View> ) : (
            <ButtonHighlight
              label="Add"
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
        updateRecipe('duration_minutes', value);
        break; 
      default:
        updateRecipe('duration_hours', value);
        break;
    };
  };

  const options = Recipe.getCategoryOptions(colors.second);

 return (
    <View style={[GlobalStyles.container, RecipeStyles.container]}>
      <View style={RecipeStyles.radContainer}>
        <RadioGroup radioButtons={ options } 
          onPress={(value) => updateRecipe('category', value)} selectedId={recipe.category}
          layout='row' labelStyle={{color: colors.second}} 
        />
      </View>
      <InputRect placeholder="Name" 
        value={recipe.name}
        style={[RecipeStyles.nameInput]}
        maxLength={50}
        onChangeText={(text) => updateRecipe('name', text)}
      />
  
      <View style={RecipeStyles.durationContainer}>

        <TextComponent label="Duration" style={{color: colors.second}}/>

        <View style={{ flex: 1 }}>
          <PickerGenerator 
            onValueChange={handleDurationChange} 
            ITEM_OPTIONS = {CONST.PICKER_OPTIONS} duration= {[recipe.duration_hours ?? 0, recipe.duration_minutes ?? 0]}/>
        </View>
      
      </View>

      <InputRect  
        placeholder='Description' 
        value= {recipe.description}
        style={RecipeStyles.descripInput} 
        multiline={ true }
        maxLength={300}
        onChangeText={(text) => updateRecipe('description', text)}
      />

      {buttonSaveDelete()}
      
    </View>
  );
}