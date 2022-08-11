import React from 'react';

const Child =({changeName}) => {
    
    return (
        <div>
           <h1>My Child Components</h1>
           <button onClick={()=> changeName("Hai Trieu")}>Change Name</button>
        </div>
    );
};

export default Child;