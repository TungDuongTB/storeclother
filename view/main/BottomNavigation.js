import React from "react";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import HomeScreen from "../page/home/Home";
import { Ionicons } from "@expo/vector-icons";
import CategoryScreen from "../page/category/Category";
import BagScreen from "../page/bag/Bag";
import WishlistScreen from "../page/wishlist/WishList";
import ProfileScreen from "../page/profile/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../../Component/colors";
import { StyleSheet } from "react-native";

const Tabs = createBottomTabNavigator();
const BottomTabNavigation = () => {
    return (
        <Tabs.Navigator
          screenOptions={{
            tabBarStyle: styles.tabBar,
            headerShown: false
          }}
        >
            <Tabs.Screen 
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                      <Ionicons 
                        name="home"
                        size={25}
                        color={focused?'white':colors.black}

                      />
                    ),
                    title: 'Trang chủ'
                  }}
            />
            <Tabs.Screen 
                name="CategoryScreen"
                component={CategoryScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons 
                          name="menu"
                          size={25}
                          color={focused?'white':colors.black}

                        />
                      ),
                      title: 'Category'
                }}
            />
            <Tabs.Screen 
                name="Bag"
                component={BagScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons 
                          name="bag"
                          size={25}
                          color={focused?'white':colors.black}

                        />
                      ),
                      title: 'Bag'
                }}
            />
            <Tabs.Screen 
                name="Wishlist"
                component={WishlistScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons 
                          name="heart"
                          size={25}
                          color={focused?'white':colors.black}

                        />
                      ),
                      title: 'WishList'
                }}
            />
            <Tabs.Screen 
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons 
                          name="person"
                          size={25}
                          color={focused?'white':colors.black}
                        />
                      ),
                      
                      tabBarLabel: 'Profile'
                }}
            />
        </Tabs.Navigator>
    )
}
export default BottomTabNavigation;
const styles = StyleSheet.create({
  tabBar:{
    height:81,
    backgroundColor:colors.blue,

  },
  iconBar:{
    color:colors.black
  }
})