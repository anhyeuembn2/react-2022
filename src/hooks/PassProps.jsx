import React from 'react';
import Child from '../components/Child';

const PassProps = () => {
    const [name,setName]=React.useState("Trieu");
    const changeName=(name)=>{
        setName(name);
    }
    return (
        <div>
           <h1>My name is {name}</h1>
            <Child changeName={changeName} />
        </div>
    );
};

export default PassProps;