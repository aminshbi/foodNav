import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'

import { CATEGORIES } from '../data/dummy-data'
import MealsList from '../components/MealsList'

const CategoryMealsScreen = props => {


    const catId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.meals.filteredMeals)

    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

    if(displayedMeals.length === 0 ){
        return <View style={styles.content}>
            <Text>No Meals found, may you check your filters !</Text>
        </View>
    }
    return (
        <MealsList listData={displayedMeals}
        navigation={props.navigation}
        />
    )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
    return {
        headerTitle: selectedCategory.title,

    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default CategoryMealsScreen;