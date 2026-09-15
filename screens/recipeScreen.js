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

export default function RecipeScreen(){
      const options = [
        {
            id: '1',
            label: 'Breakfast',
            value: '1',
            color: '#FFFFFF'
        },
        {
            id: '2',
            label: 'Lunch',
            value: '2',
            color: '#FFFFFF'
        },
        {
            id: '3',
            label: 'Dinner',
            value: '3',
            color: '#FFFFFF'
        }
    ];
    const [selectedId, setSelectedId] = useState();

    const HOUR_COUNT = 24;
    const MINUTE_COUNT = 60;
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
          <Picker style={{color: colors.second}} dropdownIconColor={colors.second}>
            {Array.from({ length: HOUR_COUNT }, (_, index) => (
              <Picker.Item 
                key={index}
                label={`${index}h`}
                value={index}
              />
            ))}
          </Picker>
        </View>
        
        <View>
          <Text style={{color: colors.second}}>: </Text>
        </View>

        <View style={{ flex: 1 }}>
          <Picker style={{color: colors.second}} dropdownIconColor={colors.second} pickerStyleType="yes">
            {Array.from({ length: MINUTE_COUNT }, (_, index) => (
              <Picker.Item
                key={index}
                label={`${index}m`}
                value={index}
              />
            ))}
          </Picker>
        </View>
      
      </View>

      <InputRect  placeholder='Description' style={RecipeStyles.descripInput} multiline={ true }/>

      <ButtonHighlight label="Save" styleButton={[GlobalStyles.bouton, {width:"50%"}]} styleText={GlobalStyles.textComponent}/>

    </View>
  );
}