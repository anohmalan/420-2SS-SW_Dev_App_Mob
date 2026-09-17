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

export default function RecipeScreen({ navigation }){

  const meals = ['Breakfast', 'Lunch', 'Dinner'];
  const options = meals.map((meal, index) => ({
    id: String(index + 1),
    label: meal,
    value: String(index + 1),
    color: colors.second
  }));

  const [selectedId, setSelectedId] = useState();

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

      <InputRect placeholder="Name" style={{width: '100%'}}/>
  
      <View style={RecipeStyles.durationContainer}>

        <TextComponent label="Duration" style={{color: colors.second}}/>

        <View style={{ flex: 1 }}>
          <PickerGenerator ITEM_OPTIONS = {PICKER_OPTIONS}/>
        </View>
      
      </View>

      <InputRect  placeholder='Description' style={RecipeStyles.descripInput} multiline={ true }/>

      <ButtonHighlight label="Save" styleButton={[GlobalStyles.bouton, {width:"50%"}]} styleText={GlobalStyles.textComponent}/>

    </View>
  );
}