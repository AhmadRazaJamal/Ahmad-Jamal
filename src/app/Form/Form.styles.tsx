import styled from 'styled-components';
import { isSmallScreen } from '../utils/constants';

export const StyledForm = styled.form`
  width: 60%;
  ${isSmallScreen ? `width: 100%;` : `width: 60%;`}
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 424px;

  .form-group {
    position: relative;
    ${isSmallScreen ? `width: 92.5%;` : `width: 80%;`}
    margin-bottom: 18px;

    &.input-error {
      margin-bottom: 24px;
    }

    input, textarea {
      padding: 8px;
      width: 100%;
    }

    textarea {
      margin-bottom: -8px;
    }

    .error-message {
      position: absolute;
      bottom: -24px;
      left: 0;
      color: red;
      font-size: 12px;
    }
  }

  button {
    background-color: #1E90FF;
    color: white;
    border: 1px;
    border-radius: 10px;
    width: 120px;
    padding: 8px;
    margin-top: 12px;
  }

  .input-error input, .input-error textarea {
    border-color: red;
    border-radius: 4px;
  }

  .input-error label {
    color: red;
  }
`;
