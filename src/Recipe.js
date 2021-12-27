import { render } from "@testing-library/react"
import React from "react"


export const Recipe=(props)=>{
const {calories, image, label, ingredients}= props.recipe;


render(

    <>
    <h1>{label}</h1>
    <img src={image} alt={label} />
    <p>calories: {calories}</p>
{ingredients.map((item, index)=><ul>

    <li key={index}>{item.text}</li>
</ul>)}
<hr/>
    </>
)

}