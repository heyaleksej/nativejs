import React, {useState} from "react";

export type RatingValueType = 0|1|2|3|4|5;

type StarPropsType ={
    selected: boolean
    onClick:(value:RatingValueType)=>void
    value:RatingValueType
}


export const UncontrolledRatings = () => {

    let [ratingValue, setRatingValue] =useState<RatingValueType>(0)

    function Star(props: StarPropsType) {
        console.log("star rendering")

        return <span onClick={()=>{props.onClick(props.value)}}>
        {props.selected ? <b>star</b> : "star"}
        </span>

    }
    console.log("rating rendering")
        return (
            <div>
                <Star selected={ratingValue >0} onClick={setRatingValue} value={1}/>
                <Star selected={ratingValue >1} onClick={setRatingValue} value={2}/>
                <Star selected={ratingValue >2} onClick={setRatingValue} value={3}/>
                <Star selected={ratingValue >3} onClick={setRatingValue} value={4}/>
                <Star selected={ratingValue >4} onClick={setRatingValue} value={5}/>
            </div>
        );

}




