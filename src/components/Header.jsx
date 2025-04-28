import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Header() {
  const { logOut, isUserLoggedIn, user } = useContext(UserContext);
  const history = useHistory();

  return (
    <header className="flex justify-between p-4 bg-blue-400 text-white">
      <p>Wit0225</p>
      <div>
        {user && <span>{user.email}</span>}
        {isUserLoggedIn ? (
          <button onClick={() => logOut()}>Log Out</button>
        ) : (
          <button onClick={() => history.push('/login')}>Log In</button>
        )}
      </div>
    </header>
  );
}
