import styled from 'styled-components';
import { isSmallScreen } from '../utils/constants';

export const ListWrapper = styled.ol`
  padding-left: 22px;
`

export const WavingHand = styled.span`
  margin-left: 4px;
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`;

export const ImageGalleryWrapper = styled.div`
  > div {
    margin-top: 24px;
    margin-bottom: 24px;
  }
  .image-gallery-svg {
    width: 18px;
  }
  .image-gallery-play-button{
    display: none;
  }
`

export const Text = styled.p`
  line-height: 2;
  margin-top: 18px;
  ${isSmallScreen ? `font-size: 16px;`: `font-size: 18px;`}
  color: black;
`;

export const Heading = styled.h2`
font-family: 'ManropeBold';
  font-size: 24px;
  line-height: 1.6;
  margin-top: 36px;
  color: black;
`;

export const ListHeading = styled.li`
  font-family: 'ManropeBold';
  font-size: 24px;
  line-height: 1.6;
  margin-top: 36px;
  color: black;
`;

export const SectionList = styled.ul`
  line-height: 2;
  margin-top: 18px;
  ${isSmallScreen ? `font-size: 16px;`: `font-size: 18px;`}
  color: black;
  padding-left: 0;
`;

export const ListItem = styled.li`
  line-height: 2;
  margin-bottom: 16px;
  ${isSmallScreen ? `font-size: 16px;`: `font-size: 18px;`}
  color: black;
`;