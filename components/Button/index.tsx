import * as React from "react";
import { Button } from "react-native";

import styled from "styled-components/native";

type ButtonOptions = {
  title: string;
  onPress?: (value?: string) => void;
};

const ButtonComponent_ = styled.TouchableOpacity`
  background-color: #6800f5;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
`;

const TextComponent = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const ButtonComponent = (props: ButtonOptions) => (
  //TODO: Use better web detection
  // return !window.document ? (
  <ButtonComponent_
    activeOpacity={0.8}
    onPress={() => {
      alert("Click!");
    }}
  >
    <TextComponent>{props.title}</TextComponent>
  </ButtonComponent_>
  // )
  // : (
  //TODO: Change web button style, button options
  // <Button title={props.title} onPress={() => alert(props.title)} />
  // );
);

export default ButtonComponent;
