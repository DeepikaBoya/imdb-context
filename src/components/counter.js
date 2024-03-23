import { useState } from 'react'
//one way
// const Counter=(props)=>
// {const className=`counter-wrapper ${props.theme}`
//     return(
//         <div className={className}>
//             <h1> Counter{props.label}</h1>
//         </div>
//     )
// }
//second way
const Counter=( {label,theme})=>
{
    // const {label,theme} =props;
    const className=`counter-wrapper ${theme}`
    // let count=0;
    const [count,setCount]=useState(0)
    const handleDecrease=()=>
    {
        if(count>0)
        {
            setCount(count-1);    

        }
    };
    const handleIncrease=()=>
    {

            // setCount(count+1);    
            setCount((prevstate)=>
            {
                return prevstate+1;
            })

            setCount((prevstate)=>
            {
                return prevstate+1;
            })
            setCount((prevstate)=>
            {
                return prevstate+1;
            })

        
    };



    const handleUpdate=(e)=>
    {
       const value= Number(e.target.value|| 0);
       setCount(value);
    }

    return(
        <div className={className}>
            <h1> Counter{label}</h1>
            <div>
                <button onClick={handleDecrease}>-</button>  
            {count} 
            <input type="number" value={count} onChange={handleUpdate}></input>

                <button onClick={handleIncrease}>+</button>
            </div>
        </div>
    )
}
export default Counter