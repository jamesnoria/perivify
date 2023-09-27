import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import { getAuth } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(undefined);

  if (user === undefined) {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }

  return (
    <div>
      <h1>Hi, I'm a React App</h1>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
    </div>
  );
}

export default App;
