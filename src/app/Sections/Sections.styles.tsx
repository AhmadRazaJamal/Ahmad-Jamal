import styled from 'styled-components';
import { isSmallScreen } from '../utils/constants';

export const SectionsContainer = styled.div`
  positions: relative;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const SectionList = styled.ul`
  line-height: 2;
  margin-top: 18px;
  font-size: 16px;
  color: black;
  padding-left: 0;
`;

export const WavingHand = styled.span`
  margin-left: 4px;
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`;

export const ImageGalleryWrapper = styled.div`
  margin-top: 36px;
  > a {
    font-size: 16px;
    color: #1E90FF;
  }
  > div {
    margin-top: 24px;
    margin-bottom: 24px;
  }
  .image-gallery-svg {
    ${isSmallScreen ? `width: 18px;` : `width: 20px;`}
  }
  .image-gallery-play-button{
    display: none;
  }
`

export const Text = styled.p`
  line-height: 2;
  margin-top: 18px;
  font-size: 16px;
  color: black;
`;

export const Heading = styled.h2`
  font-family: 'ManropeBold';
  font-size: 24px;
  line-height: 1.6;
  color: black;

  &:first-child {
    margin-top: 36px;
  }

  &:not(:first-child) {
    margin-top: 80px;
  }
`;

export const ListItem = styled.li`
  line-height: 2;
  margin-bottom: 16px;
  font-size: 16px;
  margin-left: 16px;
  color: black;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  ${isSmallScreen ? `margin-top: 50px;` : `margin-top: 36px;`}
  gap: 20px;
`;