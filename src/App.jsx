import { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import './App.css';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Link to="/login">Login</Link>
        </Route>
        <Route exact path="/login">
          <Form />
        </Route>
        <Route exact path="/users">
          <h1>Users</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
