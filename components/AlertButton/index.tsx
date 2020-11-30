import * as React from "react";
import { Alert, AlertButton, AlertOptions } from "react-native";

import styled from "styled-components/native";

type AlertButtonOptions = {
  title: string;
  message: string;
  buttons?: AlertButton[];
  dismiss?: AlertOptions;
};

const AlertButtonList = (options: AlertButtonOptions) => {
  //TODO: add separate web component alert
  !!window.document
    ? alert("Web Version goes here")
    : Alert.alert(
        options.title,
        options.message,
        options.buttons,
        options.dismiss
      );
};

const AlertButtonComponent_ = styled.Button`
  flex: 1;
`;

const AlertButtonComponent = (props: {
  title: string;
  buttonConfig: AlertButtonOptions;
}) => (
  <AlertButtonComponent_
    accessibilityLabel="Alert Button"
    color="purple"
    disabled={false}
    title={props.title}
    onPress={() => AlertButtonList(props.buttonConfig)}
    testID={props.title}
  />
);

export default AlertButtonComponent;
