import React , { useState, useEffect }from "react";
import './styles/DropdownButton.css';

const DropdownButton = ({ defaultText, onSelection, options }) => {
    const [dropdownStatus, setDropdownStatus] = useState(false);
    const [currentSelection, setCurrentSelection] = useState(options[0]);
    
    useEffect(() => {
        onSelection(currentSelection);
    }, [currentSelection, onSelection]);

    

    return (
        <div className="dropdown">
            <button className="dropdown-button" type="button" >
                <div className="dropdown-selection" onClick={() => setDropdownStatus(!dropdownStatus)}>{ defaultText }</div>
            </button>
            <div className={dropdownStatus ? "dropdown-container active": "dropdown-container"}>
                {options.map((option) => (<div className="dropdown-options" onClick={() => {
                    setCurrentSelection(option);
                    setDropdownStatus(!dropdownStatus);
                }}>{option}</div>))}
            </div>

        </div>
    )


}

export default DropdownButton;