import { Header, Loading, Toasts } from '..';
import { Login } from '../../../auth/pages';
import { Tasks } from '../../../tasks/pages';
import { actions } from '../../../auth/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RequireAuth, RequireUnauth } from '../../../auth/components';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const getAuthStateLoading = useSelector((state: any) => state.auth.getAuthStateLoading);
  const getAuthStateLoaded = useSelector((state: any) => state.auth.getAuthStateLoaded);

  useEffect(() => {
      dispatch(actions.getAuthState());
  }, [dispatch]);

  if (!getAuthStateLoaded || getAuthStateLoading) {
      return <Loading />
  }

  return (
    <>
      <Header />

      <Toasts />

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
