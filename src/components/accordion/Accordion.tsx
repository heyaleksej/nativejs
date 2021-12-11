import React, {useState} from "react";
import {ReactComponent} from "*.svg";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed:(collapsed: boolean
    )=> void
}

function Accordion(props: AccordionPropsType) {

        return <div>
            < AccordionTitle title={props.titleValue} collapsed={props.collapsed} setCollapsed={props.setCollapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    }

type AccordionTitlePropsType = {
 title: string
    collapsed: boolean
    setCollapsed:(collapsed: boolean
    )=> void
}
function AccordionTitle(props: AccordionTitlePropsType){
    console.log("accordionTittle rendering")


    return(
        <h3 onClick={() => {
            props.setCollapsed(!props.collapsed)}}>-- {props.title} --</h3>
    )
}function AccordionBody(){
    console.log("accordionBody rendering")
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
export default Accordion;