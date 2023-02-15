import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.div`
  height: 60px;
  padding: 1rem 2rem;
  border-bottom: 3px solid grey;
`;
export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding-left: 0px;
`;
export const NavItem = styled(NavLink)`
  color: black;
  display: flex;
  align-items: center;
  font-weight: 500;
  &:hover {
    border-bottom: 2px solid black;
  }
  &.active {
    color: red;
  }
`;
