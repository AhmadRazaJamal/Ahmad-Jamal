import styled, { css } from 'styled-components';
import { isSmallScreen } from '../utils/constants';

export const SectionContainer = styled.div<{ id: string }>`
    position: absolute;
    border-top-left-radius: 300px 300px;
    border-bottom-left-radius: 0px 0px;
    padding-top: 100px;
    margin: 0;
    background-color: white;
    overflow: hidden;
${({ id }) => {
        const baseStyles = css`
      padding-top: 300px;
      padding-left: 5vw;
      padding-right: 5vw;
    `;
        switch (id) {
            case 'section-one':
                return css`
          ${baseStyles}
          ${isSmallScreen ? `top: 350vh;`: `top: 2700px;`}
          ${isSmallScreen ? `width: 90%;`: `width: 40%;`}
          height: 1150px;
          right: 0;
        `;
            case 'section-two':
                return css`
          ${baseStyles}
          ${isSmallScreen ? `top: 1000vh;`: `top: 7400px;`}
          ${isSmallScreen ? `width: 90%;`: `width: 40%;`}
          height: 3700px;
          right: 0;
        `;
            case 'section-three':
                return css`
          ${baseStyles}
          ${isSmallScreen ? `top: 1500vh;`: `top: 14650px;`}
          ${isSmallScreen ? `width: 90%;`: `width: 40%;`}
          height: 1900px;
          right: 0;
        `;
            case 'section-four':
                return css`
          width:80vw;
          ${isSmallScreen ? `top: 2800vh;`: `top: 20050px;`}
          height: 100%;
          padding-top: 15vh;
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
  position: relative;
  padding: 0 5%;
  border-bottom: 2px solid #1E90FF;
`;

export const ProgressBarWrapper = styled.div`
  height: 0;
  width: 12px;
  z-index: 9999;
  position: absolute;
  top: 0;
  right: 0;
`;

export const ProgressBar = styled.div`
  height: 100%;
  width: 100%;
  transform-origin: top center;
  transform: scaleY(1);
`;

export const SectionTitle = styled.h1`
  font-family: 'ManropeRegular';
  font-weight: bolder;
  position: relative;
  color: #1E90FF;
`;

export const SectionTitleText = styled.h2`
  font-size: 40px;
  font-weight: bolder;
  transform-origin: left;
  z-index: 5;
  margin: 0;
  margin-left: -20px;
  font-family: 'ManropeRegular';
  color: #1E90FF;
`;

export const SectionNumber = styled.span`
  position: absolute;
  bottom: 15px;
  right: 0;
  color: #1E90FF;
  font-size: 24px;
  font-family: 'ManropeRegular';
  font-weight: bolder;
`;

export const SectionDetailWrapper = styled.div`
  line-height: 2;
  position: relative;
  padding: 20px 5px;
  font-family: 'ManropeRegular';
`;