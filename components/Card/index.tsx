import * as React from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";

const Card = styled.View`
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #6800f5;
  color: #000;
  padding: 25px;
  margin: 25px;
`;

const CardComponent: React.FunctionComponent<{}> = (props) => (
  <Card>{props.children}</Card>
);

export default CardComponent;
