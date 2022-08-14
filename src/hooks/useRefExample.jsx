import React,{useState,useRef,useEffect} from 'react';
// ?? useRef dùng để lưu giá trí của một biến ra bên ngoài hàm
const useRefExample = () => {
   const [count,setCount]=useState(60);
   const ref=useRef(null);
   const prevRef=useRef();
   console.log(ref)
   useEffect(()=>{
       prevRef.current=count;
   },[count])
   const handleStart=()=>{
       ref.current=setInterval(()=>{
          setCount((prev)=> prev-1)
       },1000)
   }
   const handleStop=()=>{
       clearInterval(ref.current);
       
   }
   console.log(count,prevRef.current)


    return (
        <div>
            <h2>{count}</h2>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
};

export default useRefExample;