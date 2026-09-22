import { StyleSheet } from "react-native";
import { colors, fontSizes } from "../../theme";

export const RecipesStyles = StyleSheet.create({
  container:{
    justifyContent: 'center', 
    alignItems: 'center'
  },
  logoutButton:{
    backgroundColor: colors.transp,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  }
});