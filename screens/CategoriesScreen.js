import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile'
import HeaderButton from '../components/HeaderButton'



const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals', params: {
                            categoryId: itemData.item.id
                        }
                    })
                }}
            />
        )
    };
    // console.log("props are: ", props)
    return (
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderGridItem}

        />
    )
};

CategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => {
                navData.navigation.toggleDrawer();
            }} />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

})
export default CategoriesScreen;