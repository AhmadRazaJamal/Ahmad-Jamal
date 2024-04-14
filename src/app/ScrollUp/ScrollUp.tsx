import React from 'react';
import styled from 'styled-components';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100vh;
  width: 100vw;
`;

const ScrollUpContent = styled.div`
  text-align: center;
  position: relative;
  font-weight: 800;
  font-family: 'ManropeExtraBold';
  font-size: 1.5em;
  width: 80vw;
  margin-bottom: 12vh;
  color: lightcyan;
`

const StyledIcon = styled(KeyboardArrowUpIcon)`
  opacity: 1;
  width: 24px;
  position: relative;
  top: 60px;
  left: 0px;
`;

const ScrollUp = () => (
  <Wrapper>
    <ScrollUpContent>
      <StyledIcon fontSize="large" width={100} id='scroll-icon'/>
    </ScrollUpContent>
  </Wrapper>
);

export default ScrollUp;
