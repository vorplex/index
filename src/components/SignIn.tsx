import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Button, FormGroup, InputGroup, Callout } from '@blueprintjs/core';

const SignIn: React.FC<React.HTMLAttributes<HTMLFormElement>> = props => {
  const [signInError, setSignInError] = React.useState('');
  const [email, setEmail] = React.useState('');
  const onEmailChange = React.useCallback(
    ({ target }) => setEmail(target.value),
    []
  );
  const [password, setPassword] = React.useState('');
  const onPasswordChange = React.useCallback(
    ({ target }) => setPassword(target.value),
    []
  );
  return (
    <form
      {...props}
      onSubmit={e => {
        e.preventDefault();
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(console.log)
          .catch(function(error) {
            setSignInError(error.message);
          });
      }}
    >
      <FormGroup label="Email" labelFor="email">
        <InputGroup
          type="email"
          id="email"
          value={email}
          onChange={onEmailChange}
          placeholder="Email"
        />
      </FormGroup>
      <FormGroup label="Password" labelFor="password">
        <InputGroup
          type="password"
          id="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
        />
      </FormGroup>
      <Button type="submit">Sign In</Button>
      {signInError && <Callout style={{ marginTop: 5 }}>{signInError}</Callout>}
    </form>
  );
};

export default SignIn;
