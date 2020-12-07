import Header from './components/Header';
import Navigation from './navigation';
import React from 'react';
import styled from 'styled-components/native';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar, Text, View } from 'react-native';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return (
      //TODO: add loading screen
      <View>
        <Text>Loading....</Text>
      </View>
    );
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar barStyle="light-content" />
      </SafeAreaProvider>
    );
  }
}
