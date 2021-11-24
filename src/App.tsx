import { Header } from './app/components';
import { Login } from './auth/pages';
import { Tasks } from './tasks/pages';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from './auth/components';
import { actions } from './auth/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(actions.getAuthState());
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/tasks"
          element={
            <RequireAuth>
              <Tasks />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
}

export default App;
