import React from 'react';
import { StyledViewInArIcon, Wrapper, Label } from "./InteractiveButton.styles";

interface InteractiveButtonProps {
  isOn: boolean;
  setInteractive: (isOn: boolean) => void; 
}

const InteractiveButton = ({ isOn, setInteractive }: InteractiveButtonProps) => {
  return (
    <Wrapper>
    <Label>{`Interactive Mode`}</Label>
      <StyledViewInArIcon onClick={() => setInteractive(!isOn)} isOn={isOn} fontSize="large"/>
    </Wrapper>
  );
};

export default InteractiveButton;
