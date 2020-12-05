import * as React from 'react';
import Constants from 'expo-constants';
import DrawerNavigator from './DrawerNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import { ColorSchemeName, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  NavigationContext,
} from "@react-navigation/native";

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer
      fallback={<React.Fragment></React.Fragment>}
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={{
        header: () => (
          <View
            style={{
              height: Constants.statusBarHeight > 0 ? 35 : 0,
              backgroundColor: "#2d2d2d",
            }}
          ></View>
        ),
      }}
    >
      <Stack.Screen name="Root" component={DrawerNavigator} />
      {/* <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      /> */}
    </Stack.Navigator>
  );
}

export default Navigation;
