import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BtnBack = styled.button`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid grey;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background-color: grey;
    font-weight: 500;
  }
  &.active {
    background-color: grey;
    font-weight: 500;
    color: black;
  }
`;

export const Section = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  border-bottom: 3px solid grey;
`;
export const Title = styled.h3`
  margin-bottom: 20px;
`;
export const BtnInfoList = styled.ul`
  gap: 20px;
`;
export const BtnLink = styled(NavLink)`
  color: black;
  align-items: center;
  justify-content: center;
  padding-right: 5px;
  &.active {
    color: red;
  }
`;

