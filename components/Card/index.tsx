import * as React from "react";
import styled from "styled-components/native";
import { View } from "react-native";

const Card = styled.View`
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #6800f5;
  color: #000;
  padding: 25px;
`;

//TODO: Add shadow to Card?
const CardComponent: React.FunctionComponent<{}> = (props) => (
  <View
    style={[
      {
        borderRadius: 8,
        margin: 10,
        shadowOffset: {
          width: 3,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
      },
    ]}
  >
    <Card>{props.children}</Card>
  </View>
);

export default CardComponent;
