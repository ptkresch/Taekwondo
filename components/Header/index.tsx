import * as React from 'react';
import styled from 'styled-components/native';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg viewBox="28 20 46 46" {...props}>
      <Path
        fill="rgba(0,0,0,0.2)"
        fillRule="evenodd"
        stroke="rgba(105,84,204,1)"
        strokeLinecap="round"
        strokeLinejoin="bevel"
        strokeMiterlimit={99999}
        strokeWidth={3.846}
        d="M50 19.23a-148.58-148.58 0 0023.077 46.155-132.894-132.894 0 00-46.154 0A-148.58-148.58 0 0050 19.23"
      />
      <Path
        fill="rgba(187,187,187,0.2)"
        fillRule="evenodd"
        stroke="rgba(102,190,255,1)"
        strokeLinecap="square"
        strokeMiterlimit={99999}
        strokeWidth={0.854}
        d="M38.462 57.692A-14.487-14.487 0 0050 34.615a-14.487-14.487 0 0011.538 23.077-11.857-11.857 0 00-23.076 0"
      />
    </Svg>
  );
}

const IconContainer = styled.View`
  margin-left: 20px;
  margin-right: auto;
  width: 40px;
`;

const HeaderContainer = styled.View`
  margin: auto;
  padding: 10px;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  flex-grow: 0;
  width: 100%;
  height: 10%;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border: 1px solid #a7a7a7;
  border-top-color: transparent;
`;

const HeaderTitle = styled.Text`
  font-size: 18px;
  color: #000;
  width: 100%;
  position: absolute;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <IconContainer>
        <SvgComponent />
      </IconContainer>
      <HeaderTitle>Header here!</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
