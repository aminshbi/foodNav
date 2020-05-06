import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'

import MealsList from '../components/MealsList'
import HeaderButton from '../components/HeaderButton'

const FavoritesScreen = props => {

    const favMeals = useSelector(state => state.meals.favoriteMeals)

    if(favMeals.lenght === 0 || !favMeals) {
        return (<View style={styles.content}>
            <Text>No favorite meals found !</Text>
        </View>)
    }
    return (
        <MealsList listData={favMeals}
            navigation={props.navigation} />
    )
}

FavoritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft: () => 
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => {
                navData.navigation.toggleDrawer();
            }}/>
        </HeaderButtons>
        
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default FavoritesScreen;