import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const addContact = createAsyncThunk('contacts/addContact', async (contact, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/contacts', contact);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const deleteContact = createAsyncThunk('contacts/add', async (contactId, { rejectWithValue }) => {
  try {
    const { data } = await axios.delete(`/contacts/${contactId}`);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export { fetchContacts, addContact, deleteContact };
