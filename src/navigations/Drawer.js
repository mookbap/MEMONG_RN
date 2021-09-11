import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import HomeScreen from '../screens/Home';

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
      />
    </Drawer.Navigator>
  );
}
