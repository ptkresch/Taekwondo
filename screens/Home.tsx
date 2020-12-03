import * as React from 'react';
import ButtonComponent from '../components/Button';
import CardComponent from '../components/Card';
import styled from 'styled-components/native';
import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ScreenView = styled.View`
  padding: 10px;
`;

const OpenNavigationButton = ({ navigation }: any) => {
  return (
    <ButtonComponent
      title="Open Navigation"
      onPress={() => navigation.openDrawer()}
    />
  );
};

const Home = () => {
  const navigation = useNavigation();
  return (
    <ScreenView>
      <CardComponent>
        <OpenNavigationButton navigation={navigation} />
        <ButtonComponent
          title="Let's Start Training!"
          onPress={() => {
            navigation.navigate("Notifications");
          }}
        />
      </CardComponent>
    </ScreenView>
  );
};

export default Home;
