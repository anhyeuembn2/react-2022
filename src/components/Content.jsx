import React,{memo} from 'react';

const Content = ({count,handleIncre}) => {
    console.log('re-render')
    return (
        <div>
            <button onClick={handleIncre}>Click Me!!</button>
        </div>
    );
};

export default memo(Content) ;