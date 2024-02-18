import React from "react";
export default function Square(props) {
    let [item, setitem] = React.useState(props.element)
    let [green,setgreen]=React.useState(item.bool)
    React.useEffect(() => {
        setitem(props.element)
    }, [props.element])
    
    function choose(e) {
        let chosen = localStorage.getItem("chosen")
       
        if (chosen) {
            e.bool = (e.value == chosen ? true : false)
         if(e.bool){togglegreenMode()}
           
        } else {
            localStorage.setItem("chosen", e.value)
            e.bool = true
            togglegreenMode()
            
          
        } 
    }
    
    React.useEffect(() => {
    setgreen(item.bool)
},[item.bool,props.roll])
     function togglegreenMode() {
        setgreen(true)

      }
    return <div className={`square ${green?"green":""}`} onClick={()=>choose(item)}>{item.value} </div>
}