import React,{useCallback, useEffect,useState} from 'react';
import axios from 'axios';
const useFetch = (url) => {
    const [data,setData]=React.useState([]);
   const baseURL=()=>{
       return `http://localhost:8000/users`;
   }
  const getUsers=useCallback(async()=>{
    const response=await fetch(getUsers());
   const {data}=await response.json();
   setData(data);
  },[]
 )
  
  useEffect(()=>{
     getUsers().then(setData)
  },[getUsers])
    return(
        <>
            {data?.map((item)=>(
                <div>{item.name}</div>
            ))}
        </>
    )
    
};

export default useFetch;