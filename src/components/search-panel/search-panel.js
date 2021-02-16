import React, { useState } from 'react';
import "./search-panel.css";

const SearchPanel = props => {

    const [term, setTerm] = useState("");

    const onTermChange = (e) => {
        const {onSearchChange = () => {}} = props;
        setTerm(e.target.value);

        onSearchChange(e.target.value);
    };

        return (
            <input type="text"
                   className="search-panel search-input"
                   placeholder="type to search"
                   value={term}
                   onChange={ onTermChange } />
        );
};

export default SearchPanel;
