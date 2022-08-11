import React,{useState} from 'react';

const Gift = () => {
    const gifts=[
        'CPU 19',
        "RAM 16GB",
        "RGB KEYBOARD"
    ];
    const [gift,setGift]=useState();
    const handleGifts=()=>{
       const index=Math.floor(Math.random()*gifts.length);
       console.log(index);
       setGift(gifts[index]);
    }
    return (
        <div>
            <h1>{gift || "Chua co phan thuong"}</h1>
            <button onClick={handleGifts}>Lay Thuong</button>
        </div>
    );
};

export default Gift;