import React from 'react';
import { View , Text, StyleSheet } from 'react-native';

const FavoritesScreen = props => {
    return (
        <View>
            <Text>FavoritesScreen Screen</Text>
        </View>
    )
}

const  styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
})
export default FavoritesScreen;