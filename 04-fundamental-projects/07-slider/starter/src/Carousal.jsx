import { shortList } from "./data";
import { useState } from "react";
export const Carousal = () => {
    const [people, setPeople] = useState(shortList);
    return(
        <section className="slider-container">
            {people.map((person)=>{
                const {id, image, name, title, quote} = person;
                return(
                    <article key={id} className="slide">
                        <img src={image} alt={name} className="person-img"/>
                        <h4 className="name">{name}</h4>
                        <p className="title">{title}</p>
                        <p className="text">{quote}</p>
                    </article>
                );
            })}
            
        <button className="prev">- </button>
        <button className="next">+ </button>
        </section>
    );
};