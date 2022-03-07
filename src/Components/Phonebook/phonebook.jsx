import InputContact from "../InputContact/inputContact";
import Filter from "../Filter/filter";
import ListContact from "../ListContact/listContact";
import "./phonebook.css";

const Phonebook = () => {
    return (
        <div>
            <div className="form-container">
                <h2>Phonebook</h2>
                <InputContact />
                <h2>Contacts</h2>
                <Filter />
                <ListContact />
            </div>
        </div>
    )
}

export default Phonebook;