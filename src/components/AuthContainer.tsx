import React from 'react';
import styled from 'styled-components';
import SignIn from './SignIn';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

const LeftPane = styled.aside`
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(
      217deg,
      rgba(255, 0, 0, 0.8),
      rgba(255, 0, 0, 0) 70.71%
    ),
    linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
  font-size: 20px;
  font-weight: lighter;
`;

const RightPane = styled.main`
  display: grid;
  align-items: center;
  justify-content: center;
`;

const AuthContainer: React.FC = () => {
  return (
    <Container>
      <LeftPane className="bp3-heading">Vorplex</LeftPane>
      <RightPane>
        <SignIn />
      </RightPane>
    </Container>
  );
};

export default AuthContainer;
