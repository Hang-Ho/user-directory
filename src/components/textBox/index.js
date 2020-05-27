import React from 'react';
 
const TextBox = (props) => {
    return <input type="text" name="search" value={props.search} onChange={props.handleInputChange}/>
}

 export default TextBox;