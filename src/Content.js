
import {memo} from "react";

 function Content({onCrease}){
    console.log('again')
    return (
        <div>
            <h1>HEllo ae</h1>
            <button onClick={onCrease}>Increase</button>
        </div>
    )
}
export  default memo(Content)