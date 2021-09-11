import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import More from '../screens/More';
import Trash from '../screens/Trash';
import AddMemo from '../screens/AddMemo';
import DrawerNavigator from './Drawer';
import Constants from 'expo-constants';


const Stack = createStackNavigator();
const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="More" component={More} />
            <Stack.Screen name="AddMemo" component={AddMemo} />
            <Stack.Screen name="Trash" component={Trash} />
        </Stack.Navigator>
    );
};
export default StackNavigation;