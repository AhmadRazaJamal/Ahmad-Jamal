import { Button, Checkbox, Label, StyledViewInArIcon, Wrapper } from "./Switch.styles";

interface SwitchProps {
    isOn: boolean;
    setInteractive: (isOn: boolean) => void; 
  }

  
const Switch = ({ isOn, setInteractive }: SwitchProps) => {
    return (
      <Wrapper>
        <Checkbox
          checked={isOn}
          onChange={() => setInteractive(!isOn)}
          id={'react-switch-new'}
          type='checkbox'
        />
        <Label htmlFor={'react-switch-new'}>
          <Button />
        </Label>
        <StyledViewInArIcon />
      </Wrapper>
    );
  };

  export default Switch