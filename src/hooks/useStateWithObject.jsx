import React,{useState} from 'react';

const useStateWithObject = () => {
    const [name1,setName1]=useState({name:"Trieu",age:20});
    console.log(name1)
    const handleName=()=>{
       setName1((prev)=>(
         {...prev,address:"Bac Ninh"}
       ))
    }
    return (
        <div>
            <h2>{name1.name}</h2>
            <button onClick={handleName}>Click Me !!</button>
        </div>
    );
};

export default useStateWithObject;