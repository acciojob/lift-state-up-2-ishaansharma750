import React, {usestate} from "react"

const Main = ()=>{

    let [name , setName]  = usestate("")

    function changeName(event){
        setName(event.target.value)
    }
    return (
        <div className="parent">
            <h1>Parent Component</h1>
            {
                name && <p>{name}</p>
            }
            <div className="child">
                <h1>Child Component</h1>
                <input type="text" onChange={changeName} />
            </div>
        </div>
    )
} 
export default Main