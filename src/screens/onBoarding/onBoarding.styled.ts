import styled from 'styled-components/native';
import colors from '../../theme/colors';
import { Images } from '../../assets';
import fontFamily from '../../theme/typography';

export const OnBoardingContainer = styled.View`
  flex: 1;
  background-color: ${colors.backgroundColor};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const LogoImage = styled.Image.attrs({
  source: Images.logo,
  resizeMode: 'contain',
})`
  width: 270px;
  height: 270px;
  top: 50px;
  position: absolute;
`;

export const ButtonsContainer = styled.View`
  bottom: 30px;
  position: absolute;
  gap: 20px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const PressableText = styled.Text`
  color: ${colors.buttonColor};
  font-size: 15px;
  letter-spacing: 0.4px;
  font-family: ${fontFamily.semiBold};
`;
