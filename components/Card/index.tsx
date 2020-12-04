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
  margin: 20px auto;
  padding: 25px;
  width: 95%;
  height: 300px;
`;

const CardComponent: React.FunctionComponent<{}> = (props) => (
  <Card>{props.children}</Card>
);

export default CardComponent;
