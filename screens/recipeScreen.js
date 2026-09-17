import { View, Text } from 'react-native';
import { useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';
import { TextComponent } from '../components/TextComponent';
import { InputRect } from "../components/InputRect";
import { ButtonHighlight } from "../components/ButtonHighlight";
import { GlobalStyles } from "./styles/globalStyles";
import { RecipeStyles } from './styles/recipeScreenStyles';
import { colors } from '../theme';

function PickerGenerator({ ITEM_OPTIONS }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
      }}
    >
      {ITEM_OPTIONS.map((option, index) => (
        <View
          key={index}
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View style={{ flex: 1 }}>
            <Picker
              style={{ color: colors.second }}
              dropdownIconColor={colors.second}
            >
              {[...Array(option.value).keys()].map((item) => (
                <Picker.Item
                  key={item}
                  label={`${item}${option.label}`}
                  value={item}
                />
              ))}
            </Picker>
          </View>

          {index < ITEM_OPTIONS.length - 1 && (
            <Text style={{ color: colors.second }}>:</Text>
          )}
        </View>
      ))}
    </View>
  );
}

export default function RecipeScreen(){

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