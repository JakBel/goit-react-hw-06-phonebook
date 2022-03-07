import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterContacts } from "../../Redux/action";

const Filter = () => {
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    const filterPhonebook = (e) => {
        dispatch(filterContacts(e.target.value));
    };

    return (
        <div>
            <label>
                Find contacts by name
                <br></br>
                <input
                    type="text"
                    value={filter}
                    placeholder="Input a name"
                    onChange={filterPhonebook}
                />
            </label>
        </div>
    );
};

export default Filter;