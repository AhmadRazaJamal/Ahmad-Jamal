import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { isMobileDevice, isSafariBrowser } from '../utils/constants';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100vh;
  width: 100vw;
`;

const ScrollArrowContent = styled.div`
  text-align: center;
  position: relative;
  font-weight: 800;
  font-family: 'ManropeExtraBold';
  font-size: 1.5em;
  width: 80vw;
  margin-bottom: 12vh;
  color: gray;
`;

const IconWrapper = styled.div<{ isMobileSafari: boolean }>`
  position: relative;

  ${({ isMobileSafari }) => isMobileSafari ? css`
    top: -20px;
  ` : css`
    top: 60px;
  `}
`;

const ScrollArrow = () => {
  const [isMobileSafari, setIsMobileSafari] = useState(false);

  useEffect(() => {
    if (isMobileDevice() && isSafariBrowser()) {
      setIsMobileSafari(true);
    }
  }, []);

  return (
    <Wrapper>
      <ScrollArrowContent>
        <IconWrapper isMobileSafari={isMobileSafari}>
          <KeyboardArrowUpIcon fontSize="large" id='scroll-icon' />
        </IconWrapper>
      </ScrollArrowContent>
    </Wrapper>
  );
};

export default ScrollArrow;
