import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../Redux/action";
import { saveToLocalStorage } from "../../Utils/localStorage";

const getContacts = (contacts, filter) => {
    const normFilter = filter.toLowerCase().trim();
    return contacts.filter(
        (contacts) =>
            contacts.name.toLowerCase().includes(normFilter) ||
            contacts.number.includes(filter)
    );
};

const ListContact = () => {
    const contacts = useSelector(({ contacts, filter }) =>
        getContacts(contacts, filter)
    );
    const dispatch = useDispatch();
    saveToLocalStorage("CONTACTS", contacts);

    return (
        <div>
            <ul>
                {contacts.map(({ id, name, number }) => (
                    <li key={id}>
                        {name}: {number}
                        <button
                            type="button"
                            className="del-button"
                            onClick={() => dispatch(deleteContact(id))}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListContact;
