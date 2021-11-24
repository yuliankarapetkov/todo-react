import { Header } from '..';
import { Login } from '../../../auth/pages';
import { Tasks } from '../../../tasks/pages';
import { actions } from '../../../auth/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RequireAuth, RequireUnauth } from '../../../auth/components';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(actions.getAuthState());
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={<Navigate to="/tasks" replace />}
        />

        <Route
          path="/login"
          element={
            <RequireUnauth>
              <Login />
            </RequireUnauth>
          }
        />

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
