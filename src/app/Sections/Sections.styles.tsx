import styled from 'styled-components';
import { isSmallScreen } from '../utils/constants';

export const WavingHand = styled.span`
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
  font-size: 16px;
  ${isSmallScreen ? `font-size: 14px;`: `font-size: 16px;`}
  color: black;
`;

export const Heading = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.8;
  margin-top: 64px;
  color: black;
`;

export const ListHeading = styled.li`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.8;
  margin-top: 64px;
  color: black;
`;

export const SectionList = styled.ul`
  line-height: 2;
  margin-top: 18px;
  font-size: 16px;
  color: black;
`;

export const ListItem = styled.li`
  line-height: 2;
  font-size: 16px;
  color: black;
`;
