import styled from 'styled-components';
import ViewInArIcon from '@mui/icons-material/ViewInAr';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 60px;
  align-items: center;
  margin-top: 20px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 50px;
  height: 26px;
  background: grey;
  border-radius: 100px;
  transition: background-color .2s;
`;

export const Checkbox = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked + ${Label} {
    background: #c1d1e5;
  }
`;

export const Button = styled.span`
  content: '';
  width: 20px;
  height: 20px;
  position: relative;
  left: 2px;
  border-radius: 20px;
  transition: 0.2s;
  background: #fff;
  box-shadow: 0 0px 0 rgba(10, 10, 10, 0.29);
  ${Checkbox}:checked + ${Label} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;

export const StyledViewInArIcon = styled(ViewInArIcon)`
  color: white;
  margin-left: 10px;
`;