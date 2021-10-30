import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { getVisibleContacts } from 'redux/contacts/contactsSelectors';

import { Item, Button, Trash } from './ContactList.styled';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getVisibleContacts);

    return (
        <div>
            <ul>
                {contacts.map(({ id, name, number }) => {
                    return (
                        <Item key={id}>
                            {name}: {number}
                            <Button
                                type="button"
                                onClick={() => dispatch(deleteContact(id))}
                            >Delete<Trash /></Button>
                        </Item>
                    );
                })}
            </ul>
        </div>
    );
};
