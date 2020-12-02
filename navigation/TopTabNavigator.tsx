import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

function FeedScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Screen One</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Screen Two</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Screen Three</Text>
    </View>
  );
}

const ScreenOne = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Screen One</Text>
  </View>
);

const Tab = createMaterialTopTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="One"
      tabBarOptions={{
        activeTintColor: "green",
        labelStyle: { fontSize: 18 },
        style: { backgroundColor: "#000" },
      }}
    >
      <Tab.Screen
        name="One"
        component={ScreenOne}
        options={{ tabBarLabel: "One" }}
      />
    </Tab.Navigator>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: "green",
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: "powderblue" },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ tabBarLabel: "Updates" }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: "Profile" }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    // <NavigationContainer>
    <Tabs />
    // </NavigationContainer>
  );
}
