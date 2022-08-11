import React from 'react';

const Todo = ({todo,handleDelete,handleEdit}) => {
    console.log({todo})
    return (
        <div>
            <ul>
                {todo?.map((item)=>(
                    <li key={item.id}>
                     <span>{item.name}</span>
                     <button onClick={()=> handleDelete(item.id)}>Delete</button>
                     <button onClick={()=> handleEdit(item.id)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;