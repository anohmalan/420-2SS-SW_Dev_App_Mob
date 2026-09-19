import { View } from 'react-native';
import { useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import { TextComponent } from '../components/textComponent';
import { InputRect } from "../components/inputRect";
import { ButtonHighlight } from "../components/buttonHighlight";
import { GlobalStyles } from "./styles/globalStyles";
import { RecipeStyles } from './styles/recipeScreenStyles';
import { PickerGenerator } from '../components/pickerGenerator';
import { colors } from '../theme';

export default function RecipeScreen({ navigation, route }){
  const params = route.params
  const recipe = params.recipe
  const categories = [
    {
      value: "1",
      label:'Breakfast', 
      icon: 'free-breakfast'
    },
    {
      value: "2",
      label:'Lunch', 
      icon: 'lunch-dining'
    },
    {
      value: "3",
      label:'Dinner', 
      icon: 'dinner-dining'
    }];

  const options = categories.map((meal, index) => ({
    id: String(index + 1),
    label: meal.label,
    value: meal.value,
    color: colors.second
  }));

  const [selectedId, setSelectedId] = useState(!!recipe.category && recipe.category);
  console.log(selectedId)
  const PICKER_OPTIONS = [
    {
      label: 'h',
      value: 24
    },
    {
      label: 'm',
      value: 60
    }
  ];

 return (
    <View style={[GlobalStyles.container, RecipeStyles.container]}>

      <View style={RecipeStyles.radContainer}>
        <RadioGroup radioButtons={ options } 
          onPress={setSelectedId} selectedId={selectedId}
          layout='row' labelStyle={{color: colors.second}} 
        />
      </View>
      {console.log(recipe.name)}
      <InputRect placeholder="Name" value={!!recipe.name && recipe.name} style={{width: '100%'}}/>
  
      <View style={RecipeStyles.durationContainer}>

        <TextComponent label="Duration" style={{color: colors.second}}/>

        <View style={{ flex: 1 }}>
          <PickerGenerator ITEM_OPTIONS = {PICKER_OPTIONS} duration= {[recipe.durationHours, recipe.durationMinutes]}/>
        </View>
      
      </View>

      <InputRect  placeholder='Description' value= {!!recipe.description && recipe.description} style={RecipeStyles.descripInput} multiline={ true }/>

      <ButtonHighlight label="Save" styleButton={[GlobalStyles.bouton, {width:"50%"}]} styleText={GlobalStyles.textComponent}/>

    </View>
  );
}