import { View } from 'react-native';
import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { RadioGroup } from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';
import { TextComponent } from '../components/TextComponent';
import { InputRect } from "../components/InputRect";
import { ButtonHighlight } from "../components/ButtonHighlight";
import { GlobalStyles } from "./styles/globalStyle";

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
    const MINUTE_COUNT = 61;
 return (
    <SafeAreaProvider>
      <SafeAreaView style={GlobalStyles.container}>
        <View style={[GlobalStyles.body, {alignItems:'center'}]}>

          <View style={{alignItems: 'center'}}>
            <RadioGroup radioButtons={ options } 
              onPress={setSelectedId} selectedId={selectedId}
              layout='row' labelStyle={{color: '#FFFFFF'}} 
            />
          </View>

          <InputRect placeholder="Name" placeholderTextColor="#FFFFFF" style={{width: '100%'}}/>
      
          <View style={{flexDirection: 'row', alignItems: 'center'}}>

            <TextComponent label="Duration" style={{color: '#FFFFFF'}}/>

            <View style={{ flex: 1 }}>
              <Picker style={{color: '#FFFFFF'}} dropdownIconColor="#FFFFFF">
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
              <Text style={{color: '#FFFFFF'}}>: </Text>
            </View>

            <View style={{ flex: 1 }}>
              <Picker style={{color: '#FFFFFF'}} dropdownIconColor="#FFFFFF" pickerStyleType="yes">
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

          <InputRect  placeholder='Description' placeholderTextColor="#FFFFFF" style={GlobalStyles.descripInput} multiline={ true }/>

          <ButtonHighlight label="Save" styleButton={[GlobalStyles.bouton, {width:"50%"}]} styleText={GlobalStyles.textComponent}/>

        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}