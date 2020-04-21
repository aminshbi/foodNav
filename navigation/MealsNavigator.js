import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
// import { } from 'react-native-paper'

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'


const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white'
}
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
        defaultNavigationOptions: defaultStackNavOptions
    },
);

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, { defaultNavigationOptions: defaultStackNavOptions })



const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator, navigationOptions: {
            tabBarLabel: 'Meals!',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
            }
        }, tabBarColor: Colors.primaryColor
    },
    Favorites: {
        screen: FavNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
            }
        },
        tabBarColor: Colors.accentColor
    }
}

const MealsFavNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(
    tabScreenConfig, {
    activeTintColor: 'white',
    shifting: true, // Label will appear in the selected icon
    barStyle: { // working when shifting is false
        backgroundColor: Colors.primaryColor
    }
}

) : createBottomTabNavigator(
    tabScreenConfig,
    {
        tabBarOptions: {
            activeTintColor: Colors.accentColor
        }
    });
    const FiltersNavigator = createStackNavigator({
        Filters: FiltersScreen
    }, { 
        // ********* Alternative way to set name of screen
        // navigationOptions: {
        //     drawerLabel: 'Filters '
        // },
        defaultNavigationOptions: defaultStackNavOptions })
    
    const MainNavigator = createDrawerNavigator({
        MealsFavs: {screen: MealsFavNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
        },
        Filters: {screen: FiltersNavigator,
            navigationOptions: {
                drawerLabel: 'Filters'
            }
        }
    }, {
        contentOptions: {
            activeTintColor: Colors.accentColor,
            labelStyle: {
                fontFamily: 'open-sans-bold'
            }
        }
    })

export default createAppContainer(MainNavigator);