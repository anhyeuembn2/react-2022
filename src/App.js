
import React,{useState} from 'react';
function App() {
  const orders=[100,200,300];
  const [count,setCount]=useState(()=>{
    const result=orders.reduce((prev,total)=>{
      return prev+total;
      
    },0)
    console.log(result);
     return result;
   
  });
  const handleIncre=()=>{
     setCount(prevState=> prevState+1);
     
  }
  // voi trg hop la state ban dau la object or array thi ta can phai lay lai state ban dau
  
  return (
    <div className="App" style={{padding:'20'}}>
         <h2>{count}</h2>
         <button onClick={handleIncre}>Click Me!!!</button>
    </div>
  );
}

export default App;
