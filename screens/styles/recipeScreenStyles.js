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
    alignItems: 'center'
  },
  descripInput:{
    width: '100%', 
    height: '55%', 
    verticalAlign: 'top'
  },
  deleteButton:{ 
    width: 150, 
    backgroundColor: colors.red, 
  },
  saveButton:{
    width: 150, 
  }
});
