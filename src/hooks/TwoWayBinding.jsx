import React from 'react';

const TwoWayBinding = () => {
    const Course=[
        {id:1,name:"HTML,CSS"},
        {id:2,name:"Javascript"},
        {id:3,name:"ReactJs"}
    ]
     
     const [check,setCheck]=React.useState([]);
     const handleCheckBox=(id)=>{
        setCheck((prev)=>{
            const isCheck=check.includes(id);
            if(isCheck){
                // uncheck
                return check.filter((item)=> item!==id);
            }else{
                // check
                return [...prev,id]
            }
        })
     }
     console.log(check)
    return (
        <div style={{padding:20}}>
           {Course.map((item)=>(
              <div key={item.id}>
                 <input type='checkbox'
                onChange={()=>handleCheckBox(item.id)}
                checked={check.includes(item.id)}
                  />
                 {item.name}
              </div>
           ))}  
           <button >Click Me!!!</button>
        </div>
    );
};

export default TwoWayBinding;