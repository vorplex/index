import React from 'react';
import { hot } from 'react-hot-loader/root';
import AuthContainer from './components/AuthContainer';

const App: React.FC = () => {
  const loggedIn = false;
  return loggedIn ? null : <AuthContainer />;
};

export default hot(App);
