import React from 'react';
import { FiCheck } from 'react-icons/fi';
import styled from 'styled-components';
import Button from '../button/Button';

const CheckIcon = styled(FiCheck)`
  color: ${(props) => props.theme.colors.text};
  font-weight: 500;
  font-size: 1rem;
  margin-right: 5px;
`;

function MarkForm(): JSX.Element {
  return (
    <>
      <Button color="#62DDBF">
        <CheckIcon />
        Mark tasks
      </Button>
      <Button color="#DD627800">Cancel</Button>
    </>
  );
}

export default MarkForm;
