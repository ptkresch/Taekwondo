import * as React from "react";
import { Alert, AlertOptions, Button } from "react-native";

import styled from "styled-components/native";

type AlertButtonOptions = {
  title: string;
  message: string;
  buttons?: Array<{
    text?: string;
    onPress?: (value?: string) => void;
    style?: "default" | "cancel" | "destructive";
  }>;
  dismiss?: AlertOptions;
};

const AlertButtonList = (options: AlertButtonOptions) => {
  //TODO: add separate web component for alert button, extract Alert function logic to helper file
  Alert.alert(options.title, options.message, options.buttons, options.dismiss);
};

const TouchableAlertButton = styled.TouchableOpacity`
  background-color: #6800f5;
  padding: 10px;
  border-radius: 8px;
`;

const TouchableText = styled.Text`
  color: #fff;
`;

const AlertButtonComponent = (props: {
  title: string;
  buttonConfig: AlertButtonOptions;
}) => {
  //TODO: Use better web detection
  return !window.document ? (
    <TouchableAlertButton
      activeOpacity={0.8}
      onPress={() => AlertButtonList(props.buttonConfig)}
    >
      <TouchableText>{props.title}</TouchableText>
    </TouchableAlertButton>
  ) : (
    //TODO: Change web button style, button options
    <Button title={props.title} onPress={() => alert(props.title)} />
  );
};

export default AlertButtonComponent;
