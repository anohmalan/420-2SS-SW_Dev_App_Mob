import { StyleSheet } from "react-native";
import { colors } from "../../theme";

export const RecipeStyles = StyleSheet.create({
  container:{
    alignItems:'center',
  },
  radContainer:{
    alignItems: 'center'
  },
  durationContainer:{
    flexDirection: 'row', 
    alignItems: 'center',
    width: 320
  },
  descripInput:{
    width: 320, 
    height: 350, 
    verticalAlign: 'top'
  },
  nameInput:{
    width: 320
  },
  deleteButton:{ 
    width: 150, 
    backgroundColor: colors.red, 
  },
  saveButton:{
    width: 150, 
  }
});
