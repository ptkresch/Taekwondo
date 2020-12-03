import * as React from 'react';
import styled from 'styled-components/native';
import { Button } from 'react-native';

type ButtonOptions = {
  title: string;
  value?: any;
  onPress: (value: string) => React.FunctionComponent | void;
};

const ButtonComponent_ = styled.TouchableOpacity`
  background-color: #198228;
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
      props.onPress(props.value);
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
