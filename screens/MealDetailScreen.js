import React, {useEffect, useCallback} from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { ScrollView, View, Image, Text, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import HeaderButton from '../components/HeaderButton'
import {toggleFavorite} from '../store/actions/meals'

const ListItem = props => {
    return <View style={styles.listItem}>
        <Text>{props.children}</Text>
    </View>
}


const MealDetailScreen = props => {
    const availableMeals = useSelector(state => state.meals.meals)

    const mealId = props.navigation.getParam('mealId')

    const selectedMeal = availableMeals.find(meal => meal.id === mealId)

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId])
    // One Solution:  To send param (title of meal) to navigation 
    useEffect(() => {
        // props.navigation.setParams({mealTitle: selectedMeal.title})
        props.navigation.setParams({toggleFav: toggleFavoriteHandler})
    }, [toggleFavoriteHandler])
    

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
            <View style={styles.details}>
                    <Text>{selectedMeal.duration}m</Text>
                    <Text>{selectedMeal.affordability.toUpperCase()}</Text>
                    <Text>{selectedMeal.complexity.toUpperCase()}</Text>
                </View>
                <Text style={styles.title}> Ingredients</Text>
                {selectedMeal.ingredients.map(ingredient => (
                    <ListItem key={ingredient}>{ingredient}</ListItem>
                )
                )}
                <Text style={styles.title}> Steps</Text>
                {selectedMeal.steps.map(step => (
                    <ListItem key={step}>{step}</ListItem>
                )
                )}

        </ScrollView>
    )
}

MealDetailScreen.navigationOptions = (navigationData) => {
    // const mealId = navigationData.navigation.getParam('mealId')
    const mealTitle = navigationData.navigation.getParam('mealTitle')
    const toggleFavorite = navigationData.navigation.getParam('toggleFav')
    // const selectedMeal = MEALS.find(meal => meal.id === mealId)
    return {
        headerTitle: mealTitle,
        headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Favorite" iconName="ios-star"
                onPress={toggleFavorite} />
        </HeaderButtons>)
    }
}


const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        textAlign: 'center',
        fontSize: 22
    },
    image:{
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    listItem: {
        marginHorizontal: 10,
        marginVertical: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }

})
export default MealDetailScreen;