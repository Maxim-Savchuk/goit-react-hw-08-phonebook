import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addContact } from 'redux/contacts/contactsOperations'
import { getContacts } from 'redux/contacts/contactsSelectors';

import { Container, Form, Label, Input, Button, Plus } from './ContactForm.styled';

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts)
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = e => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();

        const duplicateName = contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase());

        if (duplicateName) {
            toast.error(`${name} is already in contacts`);
            resetForm();
            return;
        }

        dispatch(addContact({ name, number }));
        resetForm();
    };

    const resetForm = () => {
        setName('');
        setNumber('');
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Label>
                    Name
                    <Input
                        type="text"
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        onChange={handleChange}
                    />
                </Label>
                <Label>
                    Number
                    <Input
                        type="tel"
                        name="number"
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        onChange={handleChange}
                    />
                </Label>
                <Button type="submit"><span>Add contact</span><Plus /></Button>
            </Form>
        </Container>
    );
}