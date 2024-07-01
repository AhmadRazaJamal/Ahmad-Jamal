import React from 'react';
import { StyledToggleWrapper, StyledToggleLabel, StyledToggleSwitch, StyledToggleCircle, StyledViewInArIcon } from "./InteractiveButton.styles";

interface InteractiveButtonProps {
  isOn: boolean;
  setInteractive: (isOn: boolean) => void; 
}

const InteractiveButton: React.FC<InteractiveButtonProps> = ({ isOn, setInteractive }) => {
  return (
    <StyledToggleWrapper>
      <StyledToggleLabel>{`Interactive Mode`}</StyledToggleLabel>
      <StyledToggleSwitch onClick={() => setInteractive(!isOn)} isOn={isOn}>
        <StyledToggleCircle isOn={isOn}>
          <StyledViewInArIcon isOn={isOn} />
        </StyledToggleCircle>
      </StyledToggleSwitch>
    </StyledToggleWrapper>
  );
};

export default InteractiveButton;
