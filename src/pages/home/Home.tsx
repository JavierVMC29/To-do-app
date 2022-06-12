import React from 'react';
import styled from 'styled-components';
import Task from '../../components/task/Task';

const Container = styled.main`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
`;

const TasksContainer = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

function Home(): JSX.Element {
  return (
    <Container>
      <Title>Home</Title>
      <p>this is home page</p>
      <TasksContainer>
        <Task
          id="1"
          title="Hacer prototipo en Figma"
          date={new Date()}
          label={{
            name: 'software',
            color: '#849'
          }}
        />
        <Task
          id="2"
          title="Hacer prototipo en Figma"
          date={new Date()}
          label={{
            name: 'software',
            color: '#849'
          }}
        />
      </TasksContainer>
    </Container>
  );
}

export default Home;
