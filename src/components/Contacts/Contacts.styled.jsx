import styled from 'styled-components';

export const ContactList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid black;
  padding: 20px;
  min-width: 350px;
  max-width: 450px;
  background-color: #d3daeb;
  border-radius: 10px;
`;

export const ContactItem = styled.li`
  font-size: 15px;
  display: flex;
  justify-content: space-between;
`;

export const ContactItemContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const ContactButton = styled.button`
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
