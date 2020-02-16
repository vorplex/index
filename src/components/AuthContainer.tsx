import React from 'react';
import styled from 'styled-components';
import { Tab, Tabs } from '@blueprintjs/core';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  const [navbarTabId, setNavbarTabId] = React.useState();
  return (
    <Container>
      <LeftPane className="bp3-heading">Vorplex</LeftPane>
      <RightPane>
        <Tabs
          renderActiveTabPanelOnly
          onChange={setNavbarTabId}
          selectedTabId={navbarTabId}
        >
          <Tab id="sign-in" title="Sign In" panel={<SignIn style={{ width: '25vw' }} />} />
          <Tab id="sign-up" title="Sign Up" panel={<SignUp style={{ width: '25vw' }} />} />
        </Tabs>
      </RightPane>
    </Container>
  );
};

export default AuthContainer;
