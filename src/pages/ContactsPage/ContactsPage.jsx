import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

import { Container, PhonebookTitle, ContactsTitle, PhonebookIcon, PeopleIcon } from './ContactsPage.styled';

export const ContactsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

    return (
        <Container>
            <PhonebookTitle>Phonebook<PhonebookIcon /></PhonebookTitle>
            <ContactForm />

            <ContactsTitle>Contacts<PeopleIcon /></ContactsTitle>
            <Filter />
            <ContactList />
        </Container>
    )
}