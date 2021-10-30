import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { getIsFetchingCurrent } from 'redux/auth/authSelectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppBar } from 'components/AppBar';
import { LoaderSpinner } from 'components/Loader';
import { PrivateRoute } from 'components/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';

import { Container } from './App.styled';

const HomePage = lazy(() => import('pages/HomePage/HomePage' /* webpackChunkName: 'HomePage' */));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage' /* webpackChunkName: 'RegisterPage' */));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage' /* webpackChunkName: 'LoginPage' */));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage' /* webpackChunkName: 'ContactsPage' */));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage' /* webpackChunkName: 'NotFoundPage' */))

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {!isFetchingCurrentUser && (
        <>
          <AppBar />
          <Suspense fallback={<LoaderSpinner />}>
            <Switch>
              <PublicRoute exact path="/">
                <HomePage />
              </PublicRoute>
              <PublicRoute exact path="/register" restricted redirectTo="/contacts">
                <RegisterPage />
              </PublicRoute>
              <PublicRoute exact path="/login" restricted redirectTo="/contacts">
                <LoginPage />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>
              <PublicRoute>
                <NotFoundPage />
              </PublicRoute>
            </Switch>
          </Suspense>
        </>
      )}
      <ToastContainer autoClose={2000} />
    </Container>
  )
}
