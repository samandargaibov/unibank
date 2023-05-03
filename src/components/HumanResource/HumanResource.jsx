import React from "react";
import './HumanResource.scss';
import HumanResourceHeader from "../HumanResourceHeader/HumanResourceHeader";
import VideoBar from "../VideoBar/VideoBar";
import Feature from "../Feature/Feature";
import Ceos from "../Ceos/Ceos";
import About from "../About/About";
import Benefits from "../Benefits/Benefits";
import HRValues from "../HRValues/HRValues";

const HumanResource = () => {
    let cartCards= [];
    if(localStorage.getItem('cards')=== null){
        localStorage.setItem('cards',JSON.stringify(cartCards));
    }
  
    let cardss = JSON.parse(localStorage.getItem('cards'));
    const lengthArr = cardss?.length;
    const lastArray = cardss?.slice(lengthArr - 1);
    const resultSum = lastArray[0]?.length;

    window.onload = function() {

        addBasket();
        function addBasket() {
            let badge = document.querySelector('.basket');
            if(resultSum === undefined){
                badge.innerText = 0;
            }
            else{
                badge.innerText = resultSum;
            }
        }
    }
    return (
        <div className="hr-content-w">
            <div className="hr-content">
                <HumanResourceHeader/>
            </div>
            <div className="container">
                <VideoBar/>
            </div>
            <div className="hr-content">
                <div className="container">
                <Feature/>
                <Ceos/>
                <About/>
                <Benefits/>
                <HRValues/>
                </div>

            </div>
        </div>
    )
}

export default HumanResource