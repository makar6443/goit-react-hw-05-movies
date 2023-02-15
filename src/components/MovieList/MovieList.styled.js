import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 25px;
  padding-bottom: 25px;
  border-bottom: 3px solid grey;
`;

export const MovieItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const GenresList = styled.ul`
  display: flex;
  gap: 5px;
  list-style: none;
  padding-left: 0;
`;
