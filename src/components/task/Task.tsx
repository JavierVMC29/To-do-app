import React from 'react';
import styled from 'styled-components';
import Label, { LabelProps } from '../label/Label';
import TitleEditable from '../titleEditable/TitleEtitable';

const Container = styled.div`
  border-radius: 4px;
  border: solid 1px #95959557;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const LabelContainer = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
`;

interface TaskProps {
  id: string;
  title: string;
  label: LabelProps;
  date: Date;
}

interface TaskState {
  expand: boolean;
}

class Task extends React.Component<TaskProps, TaskState> {
  constructor(props: TaskProps) {
    super(props);
    this.state = {
      expand: false
    };
  }

  expandTask = (): void => {
    const { expand } = this.state;
    console.log(expand);
  };

  render(): React.ReactNode {
    const { id, title, label, date } = this.props;
    return (
      <Container id={id} onClick={this.expandTask}>
        <Wrapper>
          <TitleEditable defaultTitle={title} />
          <p>{date.toISOString()}</p>
          <LabelContainer>
            <Label name={label.name} color={label.color} />
          </LabelContainer>
        </Wrapper>
      </Container>
    );
  }
}

export default Task;
