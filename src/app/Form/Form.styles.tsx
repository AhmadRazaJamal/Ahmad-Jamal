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

  input, textarea {
    padding: 8px;
    ${isSmallScreen ? `width: 92.5%;` : `width: 80%;`}
    margin-bottom: 12px;
  }

  textarea {
    height: 180px !important;
  }

  button {
    background-color: #1E90FF;
    color: white;
    border: 1px;
    border-radius: 10px;
    width: 120px;
    padding: 8px;
  }

  .input-error input, .input-error textarea {
    border-color: red;
  }

  .input-error label {
    color: red;
  }

  .text-danger {
    color: red;
    font-size: 12px;
    margin-top: -10px;
  }
`;
