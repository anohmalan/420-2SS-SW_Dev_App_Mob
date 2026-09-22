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
import ToastManager, { Toast } from 'toastify-react-native'

export default function RecipeScreen({ navigation, route }){
  const params = route.params
  const recipe = params.recipe
  const mode = params.mode
  console.log(mode)
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

    function handleAdd() {
    if ((recipe.name?.trim() ?? '') == '') {
      Toast.error('Provide a Recipe name', 'bottom')
    }else if(selectedId == null){
      Toast.error('Provide a Recipe categoty', 'bottom')
    }else if(durationHours + durationMinutes == 0){
      Toast.error('Provide a Recipe duration', 'bottom')
    }
     else {
        newTodo.id = Math.random().toString(16).substring(2);
        newTodo.name = newTodo.name.trim()

        setTodos([newTodo, ...todos]);

        setNewTodo(EMPTY_TODO());
    }
  }

  const options = categories.map((meal, index) => ({
    id: String(index + 1),
    label: meal.label,
    value: meal.value,
    color: colors.second
  }));

  const [name, setName] = useState(recipe.name);
  const [durationHours, setDurationHours] = useState(recipe.durationHours);
  const [durationMinutes, setDurationMinutes] = useState(recipe.durationMinutes);
  const [description, setDescription] = useState(recipe.description);
  const [selectedId, setSelectedId] = useState(!!recipe.category && recipe.category);
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
      <InputRect placeholder="Name" value={name} style={{width: '100%'}}/>
  
      <View style={RecipeStyles.durationContainer}>

        <TextComponent label="Duration" style={{color: colors.second}}/>

        <View style={{ flex: 1 }}>
          <PickerGenerator ITEM_OPTIONS = {PICKER_OPTIONS} duration= {[durationHours,durationMinutes]}/>
        </View>
      
      </View>

      <InputRect  placeholder='Description' value= {description} style={RecipeStyles.descripInput} multiline={ true }/>

      <ButtonHighlight label="Save" styleButton={[GlobalStyles.bouton, {width:"50%"}]} styleText={GlobalStyles.textComponent}/>

    </View>
  );
}