import React from 'react';
import { ButtonContainer, ButtonTitle } from './Button.styled';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonContainer>
  );
};

export default Button;
