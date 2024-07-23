import React, { useCallback } from 'react';
import { StyledToggleWrapper, StyledToggleLabel, StyledToggleSwitch, StyledToggleCircle, StyledViewInArIcon } from './InteractiveToggle.styles';

interface InteractiveToggleProps {
  isOn: boolean;
  setInteractive: (isOn: boolean) => void;
}

const InteractiveToggle: React.FC<InteractiveToggleProps> = ({ isOn, setInteractive }) => {
  const handleClick = useCallback(() => {
    setInteractive(!isOn);
  }, [isOn, setInteractive]);

  return (
    <StyledToggleWrapper>
      <StyledToggleLabel>Interactive Mode</StyledToggleLabel>
      <StyledToggleSwitch onClick={handleClick} isOn={isOn}>
        <StyledToggleCircle isOn={isOn}>
          <StyledViewInArIcon isOn={isOn} />
        </StyledToggleCircle>
      </StyledToggleSwitch>
    </StyledToggleWrapper>
  );
};

export default InteractiveToggle;
