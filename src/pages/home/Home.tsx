/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';

import { FiPlus } from 'react-icons/fi';

// Interfaces
import { LabelProps } from '../../components/label/Label';

// Hooks
import useFetch from '../../hooks/useFetch';

// Components
import Task from '../../components/task/Task';
import Button from '../../components/button/Button';
import TaskManager from '../../components/taskManager/TaskManager';

// Styles

const PlusIcon = styled(FiPlus)`
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  margin-right: 5px;
`;

const Container = styled.main`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentContainer = styled.div`
  min-width: 1044px;
  max-width: 1044px;
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.FontFamily};
  font-weight: bold;
  text-align: center;
  margin: 50px 0;
`;

const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  div:first-of-type button {
    color: #fff;
    width: 205px;
    height: 50px;
  }

  div:first-of-type button:hover {
    background: ${(props) => props.theme.colors.primaryDark};
  }

  div:last-of-type {
    display: flex;
    align-items: flex-end;
  }

  div:last-of-type button {
    padding-bottom: 0;
    width: 150px;
    height: 36.59px;
    font-weight: 500;
  }

  div:last-of-type button:hover {
    font-weight: bold;
  }
`;

const TasksContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

interface TaskType {
  id: string;
  title: string;
  label: LabelProps;
  date: Date;
  priority: string;
  details: string;
}

/**
 * Component to be displayed in the main page
 * @returns JSX.Element
 */
function Home(): JSX.Element {
  const { data, error } = useFetch<TaskType[]>('http://localhost:5000/tasks');
  return (
    <Container>
      <ContentContainer>
        <Title>Your tasks</Title>
        <OptionsContainer>
          <div>
            <Button color="#6284DD">
              <PlusIcon />
              Add task
            </Button>
          </div>
          <div>
            <TaskManager />
          </div>
        </OptionsContainer>
        <TasksContainer>
          {error ? <p>An error ocurred</p> : ''}
          {!data ? <p>Loading...</p> : ''}
          {data
            ? data.map((d: any) => {
              const { _id: id, title, label, date, priority, details } = d;
              const task = { id, title, label, date, priority, details };
              return <Task key={id} task={task} showCheckbox={false} />;
            })
            : ''}
        </TasksContainer>
      </ContentContainer>
    </Container>
  );
}

export default Home;
