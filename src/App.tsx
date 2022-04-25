import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/accordion/Accordion";
import OnOff from './components/OnOff/OnOff';
import {Rating, RatingValueType} from "./components/Ratings/Ratings";
import UncontrolledAccordion from "./components/accordion/UncontrolledAccordion";
import {UncontrolledRatings} from "./components/Ratings/UncontrolledRatings";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";


function App(props: any) {

    let [ratingValue, setRatingValue] =useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState(false)
    let [on,setOn] = useState<boolean>(false);



    return(
        <div className={'App'}>
            {/*<PageTitle title={"Home page"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/*article1*/}
            {/*<Rating value={3}/>*/}
            <OnOff on={on} setOn={setOn}/>
            <UncontrolledOnOff />
            {on.toString()}

            {/*<OnOff />*/}
            {/*<OnOff />*/}
            {/*<OnOff />*/}
            {/*<OnOff on={false}/>*/}
            {/*<OnOff on={true}/>*/}
            {/*<Accordion titleValue={"Menu"} collapsed={accordionCollapsed} setCollapsed={setAccordionCollapsed}/>*/}
            <Accordion titleValue={"Users"} collapsed={accordionCollapsed} setCollapsed={setAccordionCollapsed}/>
            {/*<UncontrolledAccordion  titleValue={"Menu"}  />*/}
            {/*<UncontrolledAccordion  titleValue={"Users"} />*/}

            {/*<Rating value={1}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<UncontrolledRatings/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType ={
    title: string
}

function PageTitle(props: PageTitlePropsType) {
        console.log("title rendering")
        return <h1>{ props.title }</h1>
    }


export default App;