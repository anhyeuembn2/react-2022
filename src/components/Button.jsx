import React from 'react';

const Button = ({handleAdd,edit}) => {
    console.log(edit)
    return (
        <div>
            <button onClick={handleAdd}>{edit ? "Edit" :"Add"}</button>
        </div>
    );
};

export default Button;