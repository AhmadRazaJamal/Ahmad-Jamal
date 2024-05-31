import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 60%;
`;

export const FormWrapper = styled.div`
  display: flex;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 24px;
  margin-top: 8px;
  height: 424px;

  input{
    width: 80%;
    padding: 8px;
  }
  textarea{
    width: 80%;
    padding: 8px;
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
`