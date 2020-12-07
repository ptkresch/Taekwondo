import * as React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { material, materialColors } from 'react-native-typography';
import { StyleSheet, TouchableOpacity } from 'react-native';
// import Svg, { Path, SvgProps } from 'react-native-svg';

// function SvgComponent(props: SvgProps) {
//   return (
//     <Svg viewBox="28 20 46 46" {...props}>
//       <Path
//         fill="rgba(0,0,0,0.2)"
//         fillRule="evenodd"
//         stroke="rgba(105,84,204,1)"
//         strokeLinecap="round"
//         strokeLinejoin="bevel"
//         strokeMiterlimit={99999}
//         strokeWidth={3.846}
//         d="M50 19.23a-148.58-148.58 0 0023.077 46.155-132.894-132.894 0 00-46.154 0A-148.58-148.58 0 0050 19.23"
//       />
//       <Path
//         fill="rgba(187,187,187,0.2)"
//         fillRule="evenodd"
//         stroke="rgba(102,190,255,1)"
//         strokeLinecap="square"
//         strokeMiterlimit={99999}
//         strokeWidth={0.854}
//         d="M38.462 57.692A-14.487-14.487 0 0050 34.615a-14.487-14.487 0 0011.538 23.077-11.857-11.857 0 00-23.076 0"
//       />
//     </Svg>
//   );
// }

const HeaderContainer = styled.View`
  border: 1px solid #198228;
  border-top-width: 0;
  border-right-width: 0;
  border-left-width: 0;
  background-color: #2d2d2d;
  flex: 1;
  flex-direction: row;
  flex-basis: auto;
  flex-grow: 0;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  padding-bottom: 10px;
`;

const HeaderTitle = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: bold;
  text-shadow: 3px 3px 2px #198228;
`;

const Logo = styled.Image`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 100px;
`;

const styles = StyleSheet.create({
  display1White: {
    ...material.display1WhiteObject,
    color: materialColors.whitePrimary,
  },
});

const Header = ({ navigation }: any) => {
  // const navigation = useNavigation();
  return (
    <HeaderContainer>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Logo source={require("../../assets/images/ptc_logo.png")} />
      </TouchableOpacity>
      <HeaderTitle
        style={{ ...material.display1WhiteObject, fontSize: 20, color: "#fff" }}
      >
        Powell's Taekwondo
      </HeaderTitle>
      {/* <Logo source={require("../../assets/images/hod_logo.png")} /> */}
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons
          name="md-menu"
          size={36}
          color="#208630"
          style={{ width: 60, textAlign: "center" }}
        />
      </TouchableOpacity>
    </HeaderContainer>
  );
};

export default Header;
