import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');
   
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
   };

   const onChangeHandler = (event) => {
        setTerm(event.target.value);
   };

    return (
        <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
            <label>Enter a search term</label>
            <input  value={term} onChange={onChangeHandler} />
        </form>
    </div>
    );
    
}

export default SearchBar;