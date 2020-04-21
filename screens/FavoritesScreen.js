import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MealsList from '../components/MealsList'
import { MEALS } from '../data/dummy-data'

const FavoritesScreen = props => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2' )
    return (
        <MealsList listData={favMeals}
        navigation={props.navigation} />
    )
}

FavoritesScreen.navigationOptions = {
    headerTitle: 'Your Favorites'
}

export default FavoritesScreen;