import React,{ useState } from "react";
import data from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


const Review =() => {

   const [index,setIndex] = useState(0);
//im getting all these properties out of the data array.
    const{name,job,image,text} = data[index];
    
//function to make it a loop array
    const checkNumber = (number) =>{
        if(number > data.length -1 ){
            return 0
        }
        if(number < 0){
            return data.length -1
        }

        return number;
    };

    // functions for buttons onClick
    const nextPerson = () => {
        //functional update form
        setIndex((index)=>{
        let newIndex = index + 1
        return checkNumber(newIndex);
        });
    };

    const prevPerson = () => {
        setIndex((index)=>{
            let newIndex = index - 1
            return checkNumber(newIndex);
        });
    };

const randomPerson = () => {
    let randomNumber = Math.floor( Math.random() * data.length);
    if(randomNumber === index){
        randomNumber = index + 1
    }
    setIndex(checkNumber(randomNumber));
}



    return (
    <article className="review">
        <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
        <FaQuoteRight />
        </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>

        <div className="button-container">
            <button className="prev-btn" onClick={prevPerson}>
                <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={nextPerson}>
                <FaChevronRight />
            </button>
        </div>
        <button className="random-btn"  onClick={randomPerson}>suprise me</button>
        </article>
    );
};

export default Review;