import React from 'react';
import { Alert, Button, FormGroup, InputGroup } from '@blueprintjs/core';

const SignIn: React.FC = () => {
  const [username, setUsername] = React.useState('');
  const onUsernameChange = React.useCallback(
    ({ target }) => setUsername(target.value),
    []
  );
  const [password, setPassword] = React.useState('');
  const onPasswordChange = React.useCallback(
    ({ target }) => setPassword(target.value),
    []
  );
  const [showAlert, setShowAlert] = React.useState(false);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        setShowAlert(true);
      }}
    >
      <FormGroup label="Username" labelFor="username">
        <InputGroup
          type="text"
          id="username"
          value={username}
          onChange={onUsernameChange}
          placeholder="Username"
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
      <Button type="submit">Sign In / Sign Up</Button>
      <Alert
        canEscapeKeyCancel
        canOutsideClickCancel
        confirmButtonText="Okay"
        isOpen={showAlert}
        onClose={() => setShowAlert(false)}
      >
        <p>
          Doesn't work.Yet.
        </p>
      </Alert>
    </form>
  );
};

export default SignIn;
