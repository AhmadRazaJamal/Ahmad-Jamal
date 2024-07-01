import styled, { css } from 'styled-components';
import SwipeIcon from '@mui/icons-material/Swipe';

export const StyledToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const StyledToggleLabel = styled.span`
  color: gray;
  font-size: 12px;
  margin-right: 10px;
  transition: color 0.3s ease;
`;

export const StyledToggleSwitch = styled.div<{ isOn: boolean }>`
  width: 50px;
  height: 25px;
  background-color: ${({ isOn }) => (isOn ? '#1e90ff' : 'gray')};
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 2px;
  transition: background-color 0.3s ease;
`;

export const StyledToggleCircle = styled.div<{ isOn: boolean }>`
  width: 21px;
  height: 21px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease; /* Add transition for smooth animation */

  ${({ isOn }) => isOn ? css`
    transform: translateX(24px);
  ` : css`
    transform: translateX(0);
  `}
`;

export const StyledViewInArIcon = styled(SwipeIcon)<{ isOn: boolean }>`
  color: ${({ isOn }) => (isOn ? '#1e90ff' : 'gray')};
  transition: transform 0.3s ease, color 0.3s ease; /* Add transition for smooth animation */

  ${({ isOn }) => isOn ? css`
    transform: scale(0.65);
  ` : css`
    transform: scale(0.5);
  `}
`;
