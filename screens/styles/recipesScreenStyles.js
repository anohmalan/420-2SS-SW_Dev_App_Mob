import { StyleSheet } from "react-native";
import { colors, fontSizes } from "../../theme";

export const RecipesStyles = StyleSheet.create({
  container:{
    justifyContent: 'center', 
    alignItems: 'center'
  },
  containerListVide:{
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoutButton:{
    backgroundColor: colors.transp,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  button:{
    borderRadius: 5, 
    height: 40, 
    width: 60
  },
  buttonContainer:{
    flexDirection: 'row', 
    justifyContent: 'center', 
    gap: 10
  },
  itemList:{
    minHeight: 70, 
    alignContent: 'center', 
    justifyContent:'center'
  },
  timeIconContainer:{
    alignItems: 'center', 
    marginRight: 15, 
    width: 60
  },
  recipeName:{
    fontWeight: 'bold', 
    flex: 1, color: colors.textWhite, 
    fontSize: 16
  },
  buttonAdd:{
    zIndex:10, 
    position: 'absolute', 
    end: 25, 
    bottom:70, 
    borderRadius: 999, 
    height: 70, 
    width: 70
  }
});