import styled from 'styled-components';
import { isSmallScreen } from '../utils/constants';

export const StyledForm = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  ${isSmallScreen ? `  align-items: start;;` : `align-items: center;`}
  ${isSmallScreen ? `width: 100%;` : `width: 60%;`}
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 424px;
  margin-top: -10px;

  .form-group {
    position: relative;
    ${isSmallScreen ? `width: 92.5%;` : `width: 80%;`}
    margin-bottom: 12px;

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
      bottom: -26px;
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

  button:hover {
    cursor: pointer; 
    background-color: #1C86EE;
  }

  button:disabled {
    background-color: #87CEFA;
  }

  .input-error input, .input-error textarea {
    border-color: red;
    border-radius: 4px;
  }

  .input-error label {
    color: red;
  }

  .success-message {
    color: green;
    margin-top: 12px;
    font-size: 14px;
  }

  .error-message {
    color: red;
    margin-top: 12px;
    font-size: 14px;
  }
`;
