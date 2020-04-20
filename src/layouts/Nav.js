import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Container = styled.div`
  background: ${(props) => props.theme.colors.lightgrey};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0;
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin-right: 0.5rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Logo = styled.div`
  text-transform: uppercase;
  margin: 0 0.5rem;
`;

export const Nav = () => {
  return (
    <Container>
      <Logo>Starter Theme</Logo>
      <Links>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/page-2">Page 2</NavLink>
      </Links>
    </Container>
  );
};
