import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import More from '../screens/More';
import Trash from '../screens/Trash';
import WriteMemo from '../screens/WriteMemo';
import DrawerNavigator from './Drawer';
import Constants from 'expo-constants';
import FloatingButton from '../components/FloatingButton';
import MemoOption from '../screens/MemoOption';
import AddFolderModal from '../components/AddFolderModal';
import LogIn from '../screens/LogIn';
import { DarkTheme  } from '@react-navigation/native';
import WriteMemoModal from '../screens/WriteMemoModal';

const Stack = createStackNavigator();
const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="More" component={More} />
            <Stack.Screen name="Trash" component={Trash} />
            <Stack.Screen name="WriteMemo" component={WriteMemo} />
            <Stack.Screen name="FloatingButton" component={FloatingButton} />
            <Stack.Screen name="MemoOption" component={MemoOption} />
            <Stack.Screen name="AddFolderModal" component={AddFolderModal} />
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="WriteMemoModal" component={WriteMemoModal} />

        </Stack.Navigator>
    );
};
export default StackNavigation;