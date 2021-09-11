import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigations/Stack';
import { View, Text } from 'react-native';
const App = () => {
    return(    
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>
    );
};

export default App;