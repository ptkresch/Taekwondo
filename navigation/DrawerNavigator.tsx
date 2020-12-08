import * as React from 'react';
import Home from '../screens/Home';
import ListScreen from '../screens/ListScreen';
import { DrawerContentComponentProps } from '@react-navigation/drawer/lib/typescript/src/types';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

const DrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList
        {...props}
        activeBackgroundColor="#000"
        activeTintColor="#fff"
        inactiveBackgroundColor="#fff"
      />
      <DrawerItem
        label="Close"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();

const DrawerComponent = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="ListScreen" component={ListScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerComponent;
