import styled, { css } from 'styled-components';
import { isSmallScreen } from '../utils/constants';

export const SectionContainer = styled.div<{ id: string }>`
    position: absolute;
    right: 0;
    border-top-left-radius: 300px 300px;
    border-bottom-left-radius: 0px 0px;
    padding-top: 100px;
    margin: 0;
    background-color: white;
    overflow: hidden;
${({ id }) => {
        const baseStyles = css`
      width: 40vw;
      padding-top: 50vh;
      padding-left: 5vw;
      padding-right: 5vw;
    `;
        switch (id) {
            case 'section-one':
                return css`
          ${baseStyles}
          ${isSmallScreen ? `top: 350vh;`: `top: 400vh;`}
          height: 150vh;
        `;
            case 'section-two':
                return css`
          ${baseStyles}
          ${isSmallScreen ? `top: 1000vh;`: `top: 850vh;`}
          height: 385vh;
        `;
            case 'section-three':
                return css`
          ${baseStyles}
          top: 1500vh;
          height: 305vh;
        `;
            case 'section-four':
                return css`
          ${baseStyles}
          top: 2700vh;
          height: 390vh;
        `;
            case 'section-five':
                return css`
          width: 100vw;
          top: 3000vh;
          height: 390vh;
          padding-top: 15vh;
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
  background-color: #1E90FF;
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