import { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState();
  const history = useHistory();

  const isUserLoggedIn = user ? true : false;

  function logIn(user) {
    setUser(user);
    history.push('/users');
  }

  function logOut() {
    setUser(null);
    history.push('/');
  }

  return (
    <UserContext.Provider value={{ user, logIn, logOut, isUserLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
}
