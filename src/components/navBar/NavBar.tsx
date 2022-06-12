import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  BsFillGearFill,
  BsFillCalendarDayFill,
  BsFillBookFill
} from 'react-icons/bs';

const Container = styled.nav`
  min-width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  background: ${(props) => props.theme.colors.primary};
`;

const Tabs = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const Tab = styled.li`
  margin: 0 20px;
  @media (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    margin: 0;
  }
`;

const TabLink = styled(Link)`
  color: #fff;
  padding: 10px;
  text-decoration: none;
  font-weight: 500;
`;

const BookIcon = styled(BsFillBookFill)`
  font-size: 2rem;
`;

const CalendarIcon = styled(BsFillCalendarDayFill)`
  font-size: 2rem;
`;

const SettingsIcon = styled(BsFillGearFill)`
  font-size: 2rem;
`;

function NavBar(): JSX.Element {
  return (
    <Container>
      <Tabs>
        <Tab>
          <TabLink to="/">
            <BookIcon />
          </TabLink>
        </Tab>
        <Tab>
          <TabLink to="/calendar">
            <CalendarIcon />
          </TabLink>
        </Tab>
        <Tab>
          <TabLink to="/settings">
            <SettingsIcon />
          </TabLink>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default NavBar;
