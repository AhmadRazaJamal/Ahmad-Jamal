import styled, { css, keyframes } from 'styled-components';
import ViewInArIcon from '@mui/icons-material/ViewInAr';

const popAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
`;

const shrinkAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
`;

export const Label = styled.span`
    position: relative;
    bottom: 14px;
    right: 10px;
    color: gray;
    font-size: 12px;
`;

export const Wrapper = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
`;

export const StyledViewInArIcon = styled(ViewInArIcon)<{ isOn: boolean }>`
  cursor: pointer;
  color: ${({ isOn }) => (isOn ? '#1e90ff' : 'gray')};
  ${({ isOn }) => isOn ? css`
    animation: ${popAnimation} 1s;
  ` : css`
    animation: ${shrinkAnimation} 1s;
  `}
`;
