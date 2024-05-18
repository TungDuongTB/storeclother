import { Text, View } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../page/home/Home";
import CategoryScreen from "../page/category/Category";
export function MainNavigation (){
    const Stack = createNativeStackNavigator();
    return(
       <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen">
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
                <Stack.Screen name="CategoryScreen" component={CategoryScreen} options={{headerShown:false}}/>
            </Stack.Navigator>
       </NavigationContainer>
    )
}

