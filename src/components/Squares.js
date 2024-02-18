import React from "react";
import Square from "./Square";
export default function Squares(props) {

  let [array, setarr] = React.useState(props.arrayOfNums);
 
    React.useEffect(() => {
     setarr(props.arrayOfNums)
    }, [props.arrayOfNums])
   
    let arr = array.map(e => <Square element={e} roll={props.roll} />)
    return (
        <div className="squares">{arr}</div>
    )
        
}
