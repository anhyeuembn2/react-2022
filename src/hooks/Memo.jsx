import React,{useCallback} from 'react';
import Content from '../components/Content';
const Memo = () => {
    const [count,setCount]=React.useState(1);
    const handleIncre=useCallback(()=>{
          setCount((prev)=> prev+1)
    },[])
    // ?? useCallback nếu [] thì nó sẽ trả về chính cái tham chiếu cũ
    return (
        <div>
            <h2>{count}</h2>
            <Content handleIncre={handleIncre} />
            
        </div>
    );
};

export default Memo;