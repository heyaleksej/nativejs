import React, {useState} from "react";

type ItemsType = {
    title: string
    age: any
}

type AccordionPropsType = {


    titleValue: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean
    ) => void


}

type AccordionBodyPropsType = {

    /* 👇 The title prop is optional.
* items show you when menu not collapsed
*/
    items: ItemsType[]
    onClick: (age: any) => void
}

function Accordion(props: AccordionPropsType & AccordionBodyPropsType) {

    return <div>
        < AccordionTitle title={props.titleValue} collapsed={props.collapsed} setCollapsed={props.setCollapsed}/>
        {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean
    ) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("accordionTittle rendering")


    return (
        <h3 onClick={() => {
            props.setCollapsed(!props.collapsed)
        }}>-- {props.title} --</h3>
    )
}

function AccordionBody(props:AccordionBodyPropsType) {
    console.log("accordionBody rendering")
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={()=>{props.onClick(i.age)}}> {i.title}</li>)}
        </ul>
    )
}

export default Accordion;