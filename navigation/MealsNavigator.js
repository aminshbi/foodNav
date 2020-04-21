import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
// import { } from 'react-native-paper'

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors'
import FavoritesScreen from '../screens/FavoritesScreen'

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen
    },
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
},
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.primaryColor
            },
            headerTintColor: 'white'
        }
    }, 
);

const tabScreenConfig = {
    Meals: {screen: MealsNavigator, navigationOptions: {
        tabBarLabel: 'Meals!',
        tabBarIcon: (tabInfo) => {
            return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor}/>
        }
    }, tabBarColor: Colors.primaryColor
},
Favorites: {screen: FavoritesScreen, navigationOptions: {
    tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor}/>
    }
},
tabBarColor: Colors.accentColor
}
}

const MealsFavNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(
    tabScreenConfig, {
        activeTintColor: 'white',
        shifting: true, // Label will appear in the selected icon
        barStyle : { // working when shifting is false
            backgroundColor: Colors.primaryColor
        }
    }

) :  createBottomTabNavigator(
    tabScreenConfig,
    {
    tabBarOptions: {
        activeTintColor: Colors.accentColor
    } 
});

export default createAppContainer(MealsFavNavigator);