import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { getVisibleContacts } from 'redux/contacts/contactsSelectors';

import { List, Item, Button, Trash } from './ContactList.styled';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getVisibleContacts);
    const onDeleteContact = id => dispatch(deleteContact(id));

    return (
        <div>
            <List>
                {contacts.map(({ id, name, number }) => {
                    return (
                        <Item key={id}>
                            {name}: {number}
                            <Button
                                type="button"
                                onClick={() => onDeleteContact(id)}
                            >Delete<Trash /></Button>
                        </Item>
                    );
                })}
            </List>
        </div >
    );
};
