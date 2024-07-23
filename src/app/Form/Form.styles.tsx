import styled from 'styled-components';
import { isSmallScreen } from '../utils/constants';

export const StyledForm = styled.form`
  width: ${isSmallScreen ? '100%' : '60%'};
  display: flex;
  flex-direction: column;
  align-items: ${isSmallScreen ? 'start' : 'center'};
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 424px;
  margin-top: -10px;

  .form-group {
    position: relative;
    width: ${isSmallScreen ? '92.5%' : '80%'};
    margin-bottom: 12px;

    &.input-error {
      margin-bottom: 24px;
    }

    input,
    textarea {
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
    background-color: #1e90ff;
    color: white;
    border: none;
    border-radius: 10px;
    width: 120px;
    padding: 8px;
    margin-top: 12px;

    &:hover {
      cursor: pointer;
      background-color: #1c86ee;
    }

    &:disabled {
      background-color: #87cefa;
    }
  }

  .input-error input,
  .input-error textarea {
    border-color: red;
    border-radius: 4px;
  }

  .input-error label {
    color: red;
  }

  .success-message {
    color: green;
    margin-top: 8px;
    font-size: 12px;
  }

  .error-message {
    color: red;
    margin-top: 12px;
    font-size: 14px;
  }
`;
