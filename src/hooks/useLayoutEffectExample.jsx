import React,{useState,useLayoutEffect} from 'react';
/*
   ?? useEffect
   1.Cập nhật lại state
   2.Cập nhậ DOM
   3.Render UI
   4.Gọi clean Up nếu dependenci thay đổi
   5.Gọi Callback useEffect
   !! useLayoutEffect
   1.Cập nhật lại  state
   2.Cập nhật lại DOM
   3.Gọi Clean Up
   4.Gọi callback useLayoutEffects
   5.Render UI










*/
const useLayoutEffectExample = () => {
    const [count,setCount]=useState(1);
    const handleIncre=()=>{
        setCount(count+1);
    }
    useLayoutEffect(()=>{
        console.log('Did Mount')
       if(count>3){
        setCount(1)
       }

       return ()=>{
        console.log('UnMount');
       }
    },[count])
    console.log('Mouting')
    return (
        <div>
           {console.log('Mouted')}
            <h2>{count}</h2>
            <button onClick={handleIncre}>Click Me !!!</button>
        </div>
    );
};

export default useLayoutEffectExample;