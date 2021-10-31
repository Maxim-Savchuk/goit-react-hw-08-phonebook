import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

import { Container, FormContainer, ListContainer, PhonebookTitle, ContactsTitle, PhonebookIcon, PeopleIcon } from './ContactsPage.styled';

const ContactsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

    return (
        <Container>
            <FormContainer>
                <PhonebookTitle>Phonebook<PhonebookIcon /></PhonebookTitle>
                <ContactForm />
            </FormContainer>
            <ListContainer>
                <ContactsTitle>Contacts<PeopleIcon /></ContactsTitle>
                <Filter />
                <ContactList />
            </ListContainer>
        </Container>
    )
}

export default ContactsPage;