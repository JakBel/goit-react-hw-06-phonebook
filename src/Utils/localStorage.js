export const saveToLocalStorage = (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        localStorage.setItem(key, jsonValue);
    } catch (error) {
        console.error("Error: ", error.message);
    }
};

export const loadFromLocalStorage = (key) => {
    try {
        const jsonValue = localStorage.getItem(key);
        return jsonValue === null ? undefined : JSON.parse(jsonValue);
    } catch (error) {
        console.error("Error: ", error.message);
    }
};

if (loadFromLocalStorage("CONTACTS") === undefined) {
    saveToLocalStorage("CONTACTS", []);
}

export const initialContacts = loadFromLocalStorage("CONTACTS");
