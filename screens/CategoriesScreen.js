import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors'



const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity style={styles.gridItem}
            onPress={()=>{
                props.navigation.navigate({routeName: 'CategoryMeals', params: {
                    categoryId: itemData.item.id
                }})
            }}>
            <View >
                <Text>{itemData.item.title}</Text>
            </View>
            </TouchableOpacity>
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

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white'

    
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem:{
        flex: 1,
        margin: 15,
        height: 150
    }
})
export default CategoriesScreen;