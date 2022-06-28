import React from 'react';
import styled from 'styled-components';

import { FiPlus } from 'react-icons/fi';

import Task from '../../components/task/Task';
import Button from '../../components/button/Button';
import TaskManager from '../../components/taskManager/TaskManager';

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

const task1 = {
  id: '1',
  title: 'Terminar prototipo',
  date: new Date(),
  label: {
    name: 'Personal',
    color: '#D3586E'
  },
  priority: 'high',
  details:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ad natus corporis illo culpa exercitationem fugiat. Quis optio unde commodi sint ut molestias quas non omnis ducimus quaerat culpa eum dolor numquam suscipit minus atque animi tempore maxime, autem provident voluptas, necessitatibus perspiciatis voluptates! Perferendis voluptatum nesciunt sint, cum soluta repudiandae quod quae quas tenetur quidem aspernatur dolores asperiores officiis, labore fugit natus facere commodi. Accusamus itaque nesciunt distinctio autem eligendi. Veritatis voluptatem autem impedit obcaecati ratione dolorem harum, in praesentium beatae ullam nulla aut odit nostrum optio vero, dolore, necessitatibus amet earum sequi sit. Velit, ea! Consequuntur, veniam ea!'
};

const task2 = {
  id: '2',
  title: 'Implementar prototipo de Figma en React',
  date: new Date(),
  label: {
    name: 'Personal',
    color: '#A762DD'
  },
  priority: 'low',
  details:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ad natus corporis illo culpa exercitationem fugiat. Quis optio unde commodi sint ut molestias quas non omnis ducimus quaerat culpa eum dolor numquam suscipit minus atque animi tempore maxime, autem provident voluptas, necessitatibus perspiciatis voluptates! Perferendis voluptatum nesciunt sint, cum soluta repudiandae quod quae quas tenetur quidem aspernatur dolores asperiores officiis, labore fugit natus facere commodi. Accusamus itaque nesciunt distinctio autem eligendi. Veritatis voluptatem autem impedit obcaecati ratione dolorem harum, in praesentium beatae ullam nulla aut odit nostrum optio vero, dolore, necessitatibus amet earum sequi sit. Velit, ea! Consequuntur, veniam ea!'
};

function Home(): JSX.Element {
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
          <Task task={task1} showCheckbox={false} />
          <Task task={task2} showCheckbox={false} />
        </TasksContainer>
      </ContentContainer>
    </Container>
  );
}

export default Home;
