import * as React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

const Card = styled.ScrollView`
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #208630;
  color: #000;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.3) 3px 4px 2px;
  margin: 10px auto;
  width: 95%;
  max-height: 500px;
  overflow: scroll;
`;

const CardContent = styled.View`
  padding: 25px;
`;

const CardComponent: React.FunctionComponent<{}> = (props) => (
  <Card bounces={false}>
    <CardContent>{props.children}</CardContent>
  </Card>
);

export default CardComponent;
