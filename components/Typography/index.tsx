import * as React from 'react';
import { Text, TextProps } from '../Themed';
import { material, materialColors } from 'react-native-typography';
import { StyleSheet } from 'react-native';

export const themeOverride = StyleSheet.create({
  display1White: {
    ...material.display1WhiteObject,
    color: materialColors.whitePrimary,
  },
});

const Typography = (props: TextProps) => {
  return <Text {...props} style={[props.style]} />;
};

export default Typography;
