import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch } from 'react-redux'

import HeaderButton from '../components/HeaderButton'
import Colors from '../constants/Colors'
import { setFilters } from '../store/actions/meals'

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
                trackColor={{ true: Colors.primaryColor }}
                thumbColor={Colors.primaryColor}
                value={props.state} onValueChange={props.onChange} />
        </View>

    )
}

const FiltersScreen = props => {
    const { navigation } = props;
    const [isGlutenFree, setGlutenFree] = useState(false);
    const [isLactuseFree, setLactuseFree] = useState(false);
    const [isVegan, setVegan] = useState(false);
    const [isVegetarian, setVegetarian] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactuseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        };
        dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isLactuseFree, isVegan, isVegetarian ])

    useEffect(()=> {
        navigation.setParams({save: saveFilters});
    }, [saveFilters]
    );

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <FilterSwitch label='GlutenFree'
                state={isGlutenFree}
                onChange={newValue => setGlutenFree(newValue)} />
            <FilterSwitch label='LactoseFree'
                state={isLactuseFree}
                onChange={newValue => setLactuseFree(newValue)} />
            <FilterSwitch label='Vegan'
                state={isVegan}
                onChange={newValue => setVegan(newValue)} />
            <FilterSwitch label='Vegeterian'
                state={isVegetarian}
                onChange={newValue => setVegetarian(newValue)} />
        </View>
    )
}


FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName="ios-menu" onPress={() => {
                    navData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>,
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Save" iconName="ios-save" onPress={
                    navData.navigation.getParam('save')
                } />
            </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10
    }
})
export default FiltersScreen;