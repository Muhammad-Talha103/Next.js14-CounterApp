
import {Buttonprops} from "../Types/types"



export default function Button(props:Buttonprops ){
    return(
        <button className={props.color} onClick={props.onclick} >
            {props.title }
         </button>
    )
}