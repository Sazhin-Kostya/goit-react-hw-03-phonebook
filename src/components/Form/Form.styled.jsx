import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px auto;
  max-width: 480px;
  border: 2px solid black;
  border-radius: 10px;
  padding: 15px;
  background-color: #fcba03;
`;

export const FormContacts = styled(Form)`
  border: 1px solid black;
  padding: 20px;
  min-width: 350px;
  max-width: 450px;
  background-color: #d3daeb;
  border-radius: 10px;
`;

export const FormLabel = styled.label`
  font-size: 20px;
  font-weight: bold;
`;

export const FormField = styled(Field)`
  height: 30px;
  font-size: 25px;
  border-radius: 6px;
`;

export const FormError = styled(ErrorMessage)`
  margin-bottom: 15px;
  color: red;
`;

export const FormButton = styled.button`
  height: 40px;
  width: 200px;
  border-radius: 6px;
  color: white;
  background-color: #595954;
  &:hover {
    background-color: #bfbfb8;
    color: black;
  }
`;

export const FormTitle = styled.h1`
  font-size: 50px;
`;
