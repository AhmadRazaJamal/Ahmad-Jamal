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
          ${isSmallScreen ? `top: 2500px;`: `top: 2700px;`}
          ${isSmallScreen ? `width: 90%;`: `width: 40%;`}
          ${isSmallScreen ? `height: 1300px;`: `height: 1350px;`}
          right: 0;
        `;
            case 'section-two':
                return css`
          ${baseStyles}
          ${isSmallScreen ? `top: 7200px;`: `top: 7400px;`}
          ${isSmallScreen ? `width: 90%;`: `width: 40%;`}
          ${isSmallScreen ? `height: 3900px;`: `height: 4000px;`}
          right: 0;
        `;
            case 'section-three':
                return css`
          ${baseStyles}
          ${isSmallScreen ? `top: 14450px;`: `top: 14650px;`}
          ${isSmallScreen ? `width: 90%;`: `width: 40%;`}
          ${isSmallScreen ? `height: 2300px;`: `height: 2200px;`}
          right: 0;
        `;
            case 'section-four':
                return css`
          width:80vw;
          ${isSmallScreen ? `top: 20050px;`: `top: 20050px;`}
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
  margin: 0 12px;
  display: flex;
  justify-content: space-between;
  position: relative;
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
  font-size: 28px;
  padding-left: 12px;
  color: #1E90FF;
`;

export const SectionNumber = styled.span`
  position: absolute;
  bottom: 22px;
  right: 24px;
  color: #1E90FF;
  font-size: 24px;
  font-family: 'ManropeBold';
`;

export const SectionDetailWrapper = styled.div`
  line-height: 2;
  position: relative;
  padding: 20px 24px;
  font-family: 'Poppins-Regular';
`;