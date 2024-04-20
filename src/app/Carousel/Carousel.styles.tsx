import styled from 'styled-components';

export const ReactPlayerStyled = styled.div`
`;

export const PlayerWrapper = styled.div`
  img {
    height: auto;
  }
`;

export const CarouselCustom = styled.div`
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

  p {
    color: #3b82f6;
  }
`;
