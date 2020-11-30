import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Alert, AlertButton, AlertOptions, ColorSchemeName }from 'react-native';

const AlertButtonComponent = undefined;

const dismiss: AlertOptions = { cancelable: true, onDismiss: () => { console.log('hooray! it dismissed!')}}

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName } ) => {
  return (
    <NavigationContainer
      fallback={<React.Fragment></React.Fragment>}
    //   linking={LinkingConfiguration}
      onReady={() => Alert.alert('title', 'message'
        , AlertButtonComponent, dismiss
      )}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

export default Navigation;
