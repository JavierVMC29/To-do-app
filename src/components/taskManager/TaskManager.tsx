import React from 'react';
import { FiCheck, FiTrash } from 'react-icons/fi';
import styled from 'styled-components';
import Button from '../button/Button';
import MarkForm from '../markForm/MarkForm';

const CheckIcon = styled(FiCheck)`
  color: ${(props) => props.theme.colors.text};
  font-weight: 500;
  font-size: 1rem;
  margin-right: 5px;
`;

const TrashIcon = styled(FiTrash)`
  color: ${(props) => props.theme.colors.text};
  font-weight: 500;
  font-size: 1rem;
  margin-right: 5px;
`;

interface TaskManagerState {
  mode: string;
}

class TaskManager extends React.Component<any, TaskManagerState> {
  constructor(props: any) {
    super(props);
    this.state = {
      mode: 'default'
    };
  }

  changeToMarkMode = (): void => {
    this.setState({ mode: 'mark' });
  };

  changeToDeleteMode = (): void => {
    this.setState({ mode: 'delete' });
  };

  render(): React.ReactNode {
    const { mode } = this.state;
    if (mode === 'mark') {
      return <MarkForm />;
    }
    if (mode === 'delete') {
      return <MarkForm />;
    }
    return (
      <>
        <Button color="#62DDBF00" action={this.changeToMarkMode}>
          <CheckIcon />
          Mark tasks
        </Button>
        <Button color="#DD627800" action={this.changeToDeleteMode}>
          <TrashIcon />
          Delete tasks
        </Button>
      </>
    );
  }
}

export default TaskManager;
