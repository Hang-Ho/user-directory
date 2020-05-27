import React from 'react';

const TextBox = (props) => {
    return (
        <div>
            <br/>
            <input type="text" placeholder="Search by first name" className="rounded" name="search" value={props.search} onChange={props.handleInputChange} />
            </div>
    )
}

export default TextBox;