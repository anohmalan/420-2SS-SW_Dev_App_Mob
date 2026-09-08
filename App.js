import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {RadioGroup} from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';
import { TextComponent } from './Components/TextComponent';
import { InputRect } from './Components/InputRect';
import { ButtonHighlight } from './Components/ButtonHighlight';


function ScreenOne(){
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={[styles.body, {justifyContent: 'center', alignItems: 'center'}]}>

          <InputRect placeholder='Username' placeholderTextColor="#FFFFFF"/>

          <InputRect placeholder='Password'placeholderTextColor="#FFFFFF" />

          <ButtonHighlight label={"Login"} styleButton={styles.bouton} styleText={styles.textComponent}/>

          <ButtonHighlight label={"Sign up!"} styleText={{color: "#4a32c1"}}/>

        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

function ScreenTwo(){
 return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={[styles.body, {justifyContent: 'center', alignItems: 'center'}]}>
         
          <InputRect placeholder='Username'placeholderTextColor="#FFFFFF" />

          <InputRect placeholder='Password'placeholderTextColor="#FFFFFF" />

          <InputRect placeholder='Password confirmation'placeholderTextColor="#FFFFFF" />

          <ButtonHighlight label={"Create my account"} styleButton={styles.bouton} styleText={styles.textComponent}/>

        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

function ScreenThree(){
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
      <SafeAreaView style={styles.container}>
        <View style={[styles.body, {alignItems:'center'}]}>

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

          <InputRect  placeholder='Description' placeholderTextColor="#FFFFFF" style={styles.descripInput} multiline={ true }/>

          <ButtonHighlight label="Save" styleButton={[styles.bouton, {width:"50%"}]} styleText={styles.textComponent}/>

        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default function App() {
  const SCREEN = 1;
  <StatusBar style="auto" />
  switch (SCREEN) {
    case 1:
      return ScreenOne();
    case 2:
      return ScreenTwo(); 
    case 3:
      return ScreenThree();  
    default:
      break;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#387E7F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    width:'90%',
    height: 'auto',
    gap: "5%",
    padding: 5
  },
  input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 8,
    color:"#FFFFFF",
    height: '6%' , 
    width: '70%'
  },
  descripInput:{
    width: '100%', 
    height: '55%', 
    verticalAlign: 'top'
  },

  text: {
    fontSize: 18,
  },
  bouton:{
    backgroundColor: "#F2A93B", 
    width: "auto",
    padding: 10,
    alignItems: 'center', 
    height: "6%", 
    justifyContent: "center", 
    borderRadius: 3
  },
  textComponent: {color: "#FFFFFF", fontSize: 16, fontWeight: 'bold'}
});
