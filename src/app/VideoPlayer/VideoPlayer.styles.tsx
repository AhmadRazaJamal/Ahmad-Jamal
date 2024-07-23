import styled from 'styled-components';

export const ReactPlayerStyled = styled.div`
  /* No specific styles needed for this wrapper */
`;

export const PlayerWrapper = styled.div`
  /* No specific styles needed for this wrapper */
`;

export const VideoPlayerCustom = styled.div`
  .react-player-0,
  .react-player-1 {
    height: 170px !important;
  }

  div:nth-child(4) {
    padding-top: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    button {
      width: 1.25rem;
      padding: 1px;
    }
  }

  h3 {
    font-weight: 100;
    font-size: 18px;
    margin-bottom: 0;
    margin-top: 36px;
  }

  p {
    color: gray;
    font-size: 14px;
    margin-bottom: 24px;
  }

  @media (min-width: 768px) {
    .react-player-0,
    .react-player-1 {
      height: 300px !important;
    }
  }
`;