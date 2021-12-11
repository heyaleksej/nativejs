import React from "react";
type propsType={
    xz?:string
    t1: Array<inArray>
}
type inArray={
    id:number, title: string, isDone: boolean
}


export const Todolist= (props:propsType) =>{
return(
    <div>
        <h3> {props.xz} </h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            <li><input type="checkbox" checked={props.t1[0].isDone}/> <span> {props.t1[0].title}</span></li>
            <li><input type="checkbox" checked={props.t1[1].isDone}/> <span>{props.t1[1].title}</span></li>
            <li><input type="checkbox" checked={props.t1[2].isDone}/> <span>{props.t1[2].title}</span></li>
        </ul>
        <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    </div>

        )

}
