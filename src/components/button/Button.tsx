import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: bold;
  padding: 10px;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.color};
  border-radius: 5px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;

interface ButtonProps {
  children: any;
  color: string;
  // eslint-disable-next-line react/require-default-props
  action?: () => void;
}

function Button({ color, children, action }: ButtonProps): JSX.Element {
  return (
    <Container color={color} onClick={action}>
      {children}
    </Container>
  );
}

export default Button;
