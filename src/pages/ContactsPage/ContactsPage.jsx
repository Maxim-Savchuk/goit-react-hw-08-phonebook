import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

import { Container, PhonebookTitle, ContactsTitle, PhonebookIcon, PeopleIcon } from './ContactsPage.styled';

export const ContactsPage = () => {
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