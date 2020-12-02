import * as React from "react";
import { AlertButton } from "react-native";
import AlertButtonComponent from "../components/AlertButton";
import CardComponent from "../components/Card";
import styled from "styled-components/native";
import ButtonComponent from "../components/Button";

const ScreenView = styled.View`
  padding: 10px;
`;

const AlertButtons: AlertButton[] = [
  {
    text: "Default",
    onPress: () => {
      console.log("default");
    },
    style: "default",
  },
  {
    text: "Cancel",
    onPress: () => {
      console.log("Cancel");
    },
    style: "cancel",
  },
  {
    text: "Destructive",
    onPress: () => {
      console.log("Destructive");
    },
    style: "destructive",
  },
];

export default function TabOneScreen() {
  return (
    <ScreenView>
      <CardComponent>
        <ButtonComponent
          title="This is a Button!"
          onPress={() => {
            console.log("yes!");
          }}
        />
      </CardComponent>
      <AlertButtonComponent
        title="Alert Testing!"
        buttonConfig={{
          title: "This is an Alert!",
          message: "I'm alerting you that you are one excellent human being!",
          buttons: AlertButtons,
          dismiss: {
            cancelable: false,
            onDismiss: () => {
              console.log("dismiss!");
            },
          },
        }}
      />
    </ScreenView>
  );
}
