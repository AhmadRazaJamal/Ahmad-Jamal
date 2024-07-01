import React, { useCallback } from 'react';
import { StyledToggleWrapper, StyledToggleLabel, StyledToggleSwitch, StyledToggleCircle, StyledViewInArIcon } from "./InteractiveButton.styles";
import { Switch } from '@nextui-org/react';

interface InteractiveButtonProps {
  isOn: boolean;
  setInteractive: (isOn: boolean) => void; 
}

const InteractiveButton: React.FC<InteractiveButtonProps> = ({ isOn, setInteractive }) => {
  const handleClick = useCallback(() => {
    setInteractive(!isOn);
  }, [isOn, setInteractive]);

  return (
    <StyledToggleWrapper>
      <StyledToggleLabel>{`Interactive Mode`}</StyledToggleLabel>
      <StyledToggleSwitch onClick={handleClick} isOn={isOn}>
        <StyledToggleCircle isOn={isOn}>
          <StyledViewInArIcon isOn={isOn} />
        </StyledToggleCircle>
      </StyledToggleSwitch>
    </StyledToggleWrapper>
  );
};

export default InteractiveButton;
