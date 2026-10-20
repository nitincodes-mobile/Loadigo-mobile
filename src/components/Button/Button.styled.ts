import colors from '../../theme/colors';
import styled from 'styled-components/native';
import fontFamily from '../../theme/typography';

export const ButtonContainer = styled.Pressable`
  background-color: ${colors.buttonColor};
  padding: 16px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  width: 85%;
  height: 56px;
`;

export const ButtonTitle = styled.Text`
  color: ${colors.white};
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.4px;
  font-family: ${fontFamily.semiBold};
`;
