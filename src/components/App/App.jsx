import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppBar } from 'components/AppBar/AppBar';
import { HomePage } from 'pages/HomePage';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { ContactsPage } from 'pages/ContactsPage';

import { Container } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Switch>
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
      </Switch>

      <ToastContainer autoClose={2000} />
    </Container>
  )
}

