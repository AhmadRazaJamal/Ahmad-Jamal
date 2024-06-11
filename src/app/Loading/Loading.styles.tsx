import styled, { keyframes } from 'styled-components';

interface FullScreenWrapperProps {
  isLoading?: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const FullScreenWrapper = styled.div<FullScreenWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: floralwhite;
  opacity: ${props => props.isLoading ? 0 : 1};
  transition: opacity 1s ease-in-out;
  animation: ${props => !props.isLoading && fadeIn} 1s forwards;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const CubeWrapper = styled.div`
  transform-style: preserve-3d;
  animation: bouncing var(--animation-duration) infinite;
`;

export const Cube = styled.div`
  transform-style: preserve-3d;
  transform: rotateX(45deg) rotateZ(45deg);
  animation: rotation var(--animation-duration) infinite;
`;

export const CubeFaces = styled.div`
  transform-style: preserve-3d;
  height: var(--size);
  width: var(--size);
  position: relative;
  transform-origin: 0 0;
  transform: translateX(0) translateY(0) translateZ(calc(-1 * var(--size) / 2));
`;

interface CubeFaceProps {
  className: string;
}

export const CubeFace = styled.div<CubeFaceProps>`
  position: absolute;
  inset: 0;
  background: var(--face-color);
  border: solid 0.5px white;
  &.shadow {
    transform: translateZ(calc(-1 * var(--size)));
    animation: bouncing-shadow var(--animation-duration) infinite;
  }
  &.face-top {
    transform: translate
`;