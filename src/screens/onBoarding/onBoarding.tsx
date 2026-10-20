import React from 'react';
import {
  LogoImage,
  OnBoardingContainer,
  ButtonsContainer,
  PressableText,
} from './onBoarding.styled';
import { Button } from '../../components/Button';
import { Pressable } from 'react-native';
const OnBoarding = () => {
  return (
    <OnBoardingContainer>
      <LogoImage />
      <ButtonsContainer>
        <Button title="Login" onPress={() => {}} />
        <Pressable onPress={() => {}}>
          <PressableText>Already have an accoount</PressableText>
        </Pressable>
      </ButtonsContainer>
    </OnBoardingContainer>
  );
};

export default OnBoarding;
