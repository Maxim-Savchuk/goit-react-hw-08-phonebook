import { useSelector, useDispatch } from 'react-redux';
import { LoaderSpinner } from 'components/Loader/Loader';
import { changeFilter } from 'redux/contacts/contactsActions';
import { getFilter, getLoading } from 'redux/contacts/contactsSelectors';

import { Container, Label, Input } from './Filter.styled';

export const Filter = () => {
    const dispatch = useDispatch();
    const value = useSelector(getFilter);
    const isLoadingContacts = useSelector(getLoading)

    return (
        <Container>
            <Label>
                Filter contacts by name
                <Input
                    type="text"
                    value={value}
                    onChange={event => dispatch(changeFilter(event.target.value))} />
            </Label>
            {isLoadingContacts && <LoaderSpinner />}
        </Container>

    );
};