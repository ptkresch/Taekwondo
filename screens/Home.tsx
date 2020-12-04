import * as React from 'react';
import ButtonComponent from '../components/Button';
import CardComponent from '../components/Card';
import Header from '../components/Header';
import styled from 'styled-components/native';
import Typography, { themeOverride } from '../components/Typography';
import { material, materialColors } from 'react-native-typography';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ScreenView = styled.View`
  /* background-color: #afafaf; */
`;

const ButtonContainer = styled.View`
  padding: 10px 0;
  min-width: 200px;
  width: 20%;
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
      <Header />
      <CardComponent>
        <Typography
          style={{
            ...material.body1Object,
            fontSize: 20,
            lineHeight: 30,
          }}
        >
          Since 1999, Powell's Taekwondo Center (PTC) has been providing the
          highest quality martial arts training in the greater Contra Costa
          area. Centrally located on the border of Concord and Pleasant Hill,
          CA, PTC offers classes in:
        </Typography>
        {/* Traditional Taekwondo Hapkido/Judo/Grappling Kumdo Bootcamp/Fitness
        Available for: Children (5-12) Teens (13-17) Adults (18+) */}
        <Typography
          style={{
            ...material.body1Object,
            fontSize: 20,
            lineHeight: 30,
          }}
        >
          With a focus on traditional martial arts, PTC strives to deliver
          tailored instruction to the individual, in a friendly, supportive and
          family-oriented environment. Founded in the belief that martial arts
          are about the continual journey of self-improvement, our instructors
          dedicate themselves to helping students find their own martial arts
          path.
        </Typography>
        <ButtonContainer>
          <OpenNavigationButton navigation={navigation} />
        </ButtonContainer>
        {/* <ButtonContainer>
          <ButtonComponent
            title="Let's Start Training!"
            onPress={() => {
              navigation.navigate("Notifications");
            }}
          />
        </ButtonContainer> */}
      </CardComponent>
    </ScreenView>
  );
};

export default Home;
