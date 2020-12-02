import * as React from 'react';
import { Button, Text, View } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

//TODO: Change Feed and Notification screens to proper ones
function Feed({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
}

function Notifications({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
}

const DrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();

const DrawerComponent = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
};

export default DrawerComponent;
