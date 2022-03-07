import { createReducer } from "@reduxjs/toolkit";
import { initialContacts } from "../Utils/localStorage";
import { addContact, deleteContact, filterContacts } from "./action";

const contactReducer = createReducer(initialContacts, {
    [addContact]: (state, { payload }) => [...state, payload],
    [deleteContact]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer("", {
    [filterContacts]: (state, { payload }) => payload,
});

export { contactReducer, filterReducer };
