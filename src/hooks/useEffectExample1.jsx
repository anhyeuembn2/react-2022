import React,{useState,useEffect} from 'react';

const useEffectExample1 = () => {
    const [count,setCount]=useState(180);
    useEffect(()=>{
       const timeId= setInterval(()=>{
            setCount((prev)=> prev-1);
            // no se dung toan tu === de so sanh state cu va moi xem co giong nhau khog
            // neu giong nhau no se k re-render
            console.log('set state')
        },1000);
        // ham clean up se se chay truoc khi component bi unmount
        // va ham nay se chay truoc lan re-render ke tiep
        return ()=>{
            
            clearInterval(timeId);
        }
    },[])
    
    console.log('re-render')
    return (
        <div>
          
           <h1>{count}</h1>
           {/* <button onClick={()=> setCount(count+1)}>Add Counter</button> */}
        </div>
    );
};

export default useEffectExample1;