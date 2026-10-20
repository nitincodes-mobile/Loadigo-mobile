import React from 'react';
import {
  LogoImage,
  OnBoardingContainer,
  ButtonsContainer,
  PressableText,
} from './onBoarding.styled';
import { Button } from '../../components/Button';
import { Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';
const OnBoarding = () => {
  const { t } = useTranslation();
  return (
    <OnBoardingContainer>
      <LogoImage />
      <ButtonsContainer>
        <Button title={t('common.login')} onPress={() => {}} />
        <Pressable onPress={() => {}}>
          <PressableText>
            {t('common.noAccountYet')} {t('common.signUp')}
          </PressableText>
        </Pressable>
      </ButtonsContainer>
    </OnBoardingContainer>
  );
};

export default OnBoarding;
