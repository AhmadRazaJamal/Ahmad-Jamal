import styled, { css } from 'styled-components';
import { isSmallScreen, isMobileScreen, isMobileDevice } from '../utils/constants';

export const SectionContainer = styled.div<{ id: string, isMobileSafari: boolean }>`
    position: absolute;
    padding-top: 100px;
    margin: 0;
    background-color: floralwhite;
    overflow: hidden; /* Ensure content stays within bounds */
${({ id }) => {
    const baseStyles = css`
      ${isSmallScreen ? `padding-top: 200px;` : `padding-top: 250px;`}
      padding-left: 5vw;
      padding-right: 5vw;
    `;
    switch (id) {
      case 'section-one':
        return css`
          ${baseStyles}
          top: 200dvh;
          ${isSmallScreen ? `width: 90%;` : `width: 40%;`}
          ${isSmallScreen ? `height: 1350px;` : `height: 1200px;`}
          right: 0;
        `;
      case 'section-two':
        return css`
          ${baseStyles}
          top: 680dvh;
          ${isSmallScreen ? `width: 90%;` : `width: 40%;`}
          ${isSmallScreen ? `height: 3800px;` : `height: 4000px;`}
          right: 0;
        `;
      case 'section-three':
        return css`
          ${baseStyles}
          top: 1550dvh;
          ${isSmallScreen ? `width: 90%;` : `width: 40%;`}
          ${isSmallScreen ? `height: 2100px;` : `height: 1900px;`}
          right: 0;
        `;
      case 'section-four':
        return css`
          width:80vw;
          ${isSmallScreen ? `top: 2090dvh;` : `top: 2100dvh;`}
          height: 100%;
          padding-top: 100px;
          padding-left: 10vw;
          padding-right: 10vw;
          border-top-left-radius: 0;
        `;
      default:
        return '';
    }
  }}
`;

export const SectionIntroWrapper = styled.div` 
  margin: 0 24px;
  display: flex;
  justify-content: space-between;
  position: relative;
  border-bottom: 2px solid #1E90FF;
`;

export const ProgressBarWrapper = styled.div`
  height: 100%;
  width: 12px;
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
`;

export const ProgressBar = styled.div`
  height: 100%;
  width: 100%;
  transform-origin: top center;
  transform: scaleY(1);
`;

export const SectionTitle = styled.h1`
  font-weight: normal;
  font-size: 28px;
  color: #1E90FF;
  margin-bottom: 16px;
`;

export const SectionNumber = styled.span`
  font-size: 28px;
  color: #1E90FF;
  margin-bottom: 16px;
`;

export const SectionDetailWrapper = styled.div`
  line-height: 2;
  position: relative;
  padding: 0px 24px;
  padding-top: 36px;
`;
