import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center;
`;

export const Footer = () => {
  return <Container>This is the site Footer</Container>;
};
