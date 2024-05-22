import { Text, View } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../page/home/Home";
import CategoryScreen from "../page/category/Category";
import BottomTabNavigation from "./BottomNavigation";
const MainNavigation =()=>{
    const Stack = createNativeStackNavigator();
    return(
            <Stack.Navigator initialRouteName="BottomTabNavigation">
                <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} options={{headerShown:false}}/>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
                <Stack.Screen name="CategoryScreen" component={CategoryScreen} options={{headerShown:false}}/>
            </Stack.Navigator>
    );
}
export default MainNavigation;