import * as React from 'react';
import ButtonComponent from '../components/Button';
import CardComponent from '../components/Card';
import styled from 'styled-components/native';
import { material, materialColors } from 'react-native-typography';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
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

const Body = styled.Text`
  font-size: 25px;
  width: 100%;
  position: relative;
  text-align: center;
`;

const styles = StyleSheet.create({
  body2: {
    ...material.body2Object,
  },
});

const Home = () => {
  const navigation = useNavigation();
  return (
    <ScreenView>
      <CardComponent>
        <Text>Powell's Taekwondo Center </Text>
        <Body style={styles.body2}>
          Since 1999, Powell's Taekwondo Center (PTC) has been providing the
          highest quality martial arts training in the greater Contra Costa
          area. Centrally located on the border of Concord and Pleasant Hill,
          CA, PTC offers classes in: Traditional Taekwondo
          Hapkido/Judo/Grappling Kumdo Bootcamp/Fitness Available for: Children
          (5-12) Teens (13-17) Adults (18+) With a focus on traditional martial
          arts, PTC strives to deliver tailored instruction to the individual,
          in a friendly, supportive and family-oriented environment. Founded in
          the belief that martial arts are about the continual journey of
          self-improvement, our instructors dedicate themselves to helping
          students find their own martial arts path.
          {/* Try Taekwondo! NO CONTRACTS
          $40 for the first month Includes a uniform */}
        </Body>
        <OpenNavigationButton navigation={navigation} />
        {/* <ButtonComponent
          title="Let's Start Training!"
          onPress={() => {
            navigation.navigate("Notifications");
          }}
        /> */}
      </CardComponent>
    </ScreenView>
  );
};

export default Home;
