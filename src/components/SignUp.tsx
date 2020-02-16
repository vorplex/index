import React from 'react';
import { auth } from 'firebase';
import { Button, FormGroup, InputGroup, Callout } from '@blueprintjs/core';

const SignUp: React.FC<React.HTMLAttributes<HTMLFormElement>> = props => {
  const [signUp, setSignUpError] = React.useState('');
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
        auth()
          .createUserWithEmailAndPassword(email, password)
          .then(console.log)
          .catch(function(error) {
            setSignUpError(error.message);
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
      <Button type="submit">Sign Up</Button>
      {signUp && <Callout style={{ marginTop: 5 }}>{signUp}</Callout>}
    </form>
  );
};

export default SignUp;
