import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppBar } from 'components/AppBar';
import { LoaderSpinner } from 'components/Loader';

import { Container } from './App.styled';

const HomePage = lazy(() => import('pages/HomePage/HomePage' /* webpackChunkName: 'HomePage' */));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage' /* webpackChunkName: 'RegisterPage' */));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage' /* webpackChunkName: 'LoginPage' */));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage' /* webpackChunkName: 'ContactsPage' */));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage' /* webpackChunkName: 'NotFoundPage' */))

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Switch>
        <Suspense fallback={<LoaderSpinner />}>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/register">
            <RegisterPage />
          </Route>

          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/contacts">
            <ContactsPage />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Suspense>
      </Switch>

      <ToastContainer autoClose={2000} />
    </Container>
  )
}

