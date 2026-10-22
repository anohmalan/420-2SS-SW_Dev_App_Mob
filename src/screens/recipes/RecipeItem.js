import { View, Text} from "react-native";
import { RecipesStyles } from "../styles/recipesScreenStyles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors, iconSizes,fontSizes } from "../../theme";

export default function RecipeItem({item}) {
  const ICON = ["free-breakfast",'dinner-dining','lunch-dining']
  const ICON_COLOR = [colors.breakfast,colors.dinner, colors.lunch] 
 
  return(

    <View style={{flexDirection: 'row'}}>
      <View style={RecipesStyles.timeIconContainer}>
        <MaterialIcons name={ICON[item.category-1]} size={iconSizes.m} color={ICON_COLOR[item.category-1]} />
        <View >
          <Text style={{color: colors.textWhite, }}>
            {item.duration_hours}h{String(item.duration_minutes).padStart(2, '0')}
          </Text>
        </View>
      </View>

      <View style={{height: 'auto', flex:1}}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={RecipesStyles.recipeName}>{ item.name }</Text>
      
        <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: fontSizes.md, color: colors.textWhite }} >
          {item.description}
        </Text>
        
      </View>           
    </View>  
  );  
}