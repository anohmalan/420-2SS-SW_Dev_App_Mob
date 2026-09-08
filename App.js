import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View,TouchableHighlight } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import RadioGroup from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';


function TextComponent({label, ...otherProps}) {
  return (
    <View >
      <Text {...otherProps}>{label}</Text>
    </View>
  );
}

function InputRect({placeholder,style, ...otherProps}) {
    return (
        <TextInput
            placeholder={placeholder}
            style={[styles.input, style]}
            {...otherProps}
        />
    )
}

function ButtonHighlight({label,styleText, styleButton}){
  return(
    <TouchableHighlight style={styleButton} activeOpacity={0.6}>

      <TextComponent label={label} style={styleText}/>

    </TouchableHighlight>
  );

}

function TextInputComponent({placeholder, style, placeholderTextColor}){
  return(
    <TextInput placeholder={placeholder} style={style} placeholderTextColor={placeholderTextColor}/>
  );
}


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
         
          <TextInput
            placeholder='Username'
            placeholderTextColor="#FFFFFF"
            style={[styles.input]}
          />
          <TextInput
            placeholder='Password'
            placeholderTextColor="#FFFFFF"            
            style={[styles.input]}
          />
          <TextInput
            placeholder='Password confirmation'
            placeholderTextColor="#FFFFFF"            
            style={[styles.input]}
          />
          <TouchableHighlight 
            style={styles.bouton}
            activeOpacity={0.6}>
            <TextComponent label={"Create my account"} style={{color: "#FFFFFF", fontSize: 16, fontWeight: 'bold'}}/>
          </TouchableHighlight>

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
            <RadioGroup radioButtons={ options } onPress={setSelectedId} selectedId={selectedId} layout='row' labelStyle={{color: '#FFFFFF'}} />
          </View>

            <TextInput
              placeholder='Name'
              placeholderTextColor="#FFFFFF"
              style={[styles.input, {width: '100%'}]}
            />
      
          <View style={{flexDirection: 'row', alignItems: 'center'}}>

            <View>
              <Text style={{color: '#FFFFFF'}}>Duration </Text>
            </View>

            <View style={{ flex: 1 }}>
              <Picker style={{color: '#FFFFFF'}} dropdownIconColor="#FFFFFF">
                {Array.from({ length: HOUR_COUNT }, (_, index) => (
                  <Picker.Item 
                    key={index}
                    label={`${index}h`}
                    value={index.toString()}
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
                    value={index.toString()}
                  />
                ))}
              </Picker>
            </View>
          
          </View>

           <TextInput
                style={[styles.input, { width: '100%', height: '55%', verticalAlign: 'top' }]}
                placeholder='Description'
                placeholderTextColor="#FFFFFF"
                multiline={ true }
              />
          <TouchableHighlight 
            style={[styles.bouton, {width:"50%"}]}
            activeOpacity={0.6}>
            <TextComponent label={"Save"} style={{color: "#FFFFFF", fontSize: 16, fontWeight: 'bold'}}/>
          </TouchableHighlight>

        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default function App() {
  const SCREEN = 2;
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
