import * as React from 'react';
import ButtonComponent from '../components/Button';
import CardComponent from '../components/Card';
import Header from '../components/Header';
import styled from 'styled-components/native';
import Typography from '../components/Typography';
import Unorderedlist from 'react-native-unordered-list';
import { material } from 'react-native-typography';
import { useNavigation } from '@react-navigation/native';

const ScreenView = styled.View`
  /* background-color: #afafaf; */
`;

const ButtonContainer = styled.View`
  padding: 10px 0;
  min-width: 200px;
  width: 20%;
`;

const ClassList: Array<{ text: string; symbol: number }> = [
  { text: "Traditional Taekwondo", symbol: 0x2630 },
  { text: "Hapkido/Judo/Grappling", symbol: 0x2632 },
  { text: "Kumdo", symbol: 0x2635 },
  { text: "Bootcamp/Fitness", symbol: 0x2637 },
];

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
            fontSize: 14,
            lineHeight: 24,
          }}
        >
          Since 1999, Powell's Taekwondo Center (PTC) has been providing the
          highest quality martial arts training in the greater Contra Costa
          area. Centrally located on the border of Concord and Pleasant Hill,
          CA, PTC offers classes in:
        </Typography>
        {ClassList.map((classItem) => (
          <Unorderedlist
            bulletUnicode={classItem.symbol}
            style={{ lineHeight: 30, marginLeft: 20 }}
            key={classItem.text}
          >
            <Typography
              style={{
                ...material.body1Object,
                fontSize: 14,
                lineHeight: 24,
              }}
            >
              {classItem.text}
            </Typography>
          </Unorderedlist>
        ))}
        <Typography
          style={{
            ...material.body1Object,
            fontSize: 14,
            lineHeight: 24,
          }}
        >
          Available for:
        </Typography>
        <Unorderedlist style={{ lineHeight: 30, marginLeft: 20 }}>
          <Typography
            style={{
              ...material.body1Object,
              fontSize: 14,
              lineHeight: 24,
            }}
          >
            Children (5-12)
          </Typography>
        </Unorderedlist>
        <Unorderedlist style={{ lineHeight: 30, marginLeft: 20 }}>
          <Typography
            style={{
              ...material.body1Object,
              fontSize: 14,
              lineHeight: 24,
            }}
          >
            Teens (13-17)
          </Typography>
        </Unorderedlist>
        <Unorderedlist style={{ lineHeight: 30, marginLeft: 20 }}>
          <Typography
            style={{
              ...material.body1Object,
              fontSize: 14,
              lineHeight: 24,
            }}
          >
            Adults (18+)
          </Typography>
        </Unorderedlist>
      </CardComponent>
      <CardComponent>
        <ButtonContainer>
          <OpenNavigationButton navigation={navigation} />
        </ButtonContainer>
        <Typography
          style={{
            ...material.body1Object,
            fontSize: 14,
            lineHeight: 24,
          }}
        >
          With a focus on traditional martial arts, PTC strives to deliver
          tailored instruction to the individual, in a friendly, supportive and
          family-oriented environment. Founded in the belief that martial arts
          are about the continual journey of self-improvement, our instructors
          dedicate themselves to helping students find their own martial arts
          path.
        </Typography>
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
