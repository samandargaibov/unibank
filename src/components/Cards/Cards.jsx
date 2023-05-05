import React, {useEffect, useState} from "react";
import './Cards.scss';
import {cardTypes,otherCards} from "../../../src/mockApi/mockApi"


const Cards = () => {
    const [cards,setCards]= useState([])

    const url = 'http://localhost:3001/debetCards'

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setCards(data))
        .catch(error => console.log(error))
    },[])

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

    function updateCardBadge(){
        let badge = document.querySelector('.basket');
        badge.innerHTML = cartCards.length;
    }
    console.log('uzunluq_mass',resultSum);
    document.addEventListener('click', e => {
        const element = e.target;

        if(element.classList.contains('add-btn-card')){
            e.preventDefault();
            let index = element.getAttribute('data-card');

            let cardList = JSON.parse(localStorage.getItem('cards'));

            cartCards.push({
                ...cards[index-1]
            })
            
            cardList.push(cartCards)
            localStorage.setItem('cards',JSON.stringify(cardList));
        
            updateCardBadge();
        }
    })

    document.addEventListener('click', e => {
        const element = e.target;

        if(element.classList.contains('add-btn-card2')){
            e.preventDefault();
            let index = element.getAttribute('data-card');

            let cardList = JSON.parse(localStorage.getItem('cards'));

            cartCards.push({
                ...otherCards[index-1]
            })
            
            cardList.push(cartCards)
            localStorage.setItem('cards',JSON.stringify(cardList));
        
            updateCardBadge();
        }
    })

    return (
        <div className="common-cards cc-content">
            <div className="container content-wrapper">
            <p>{cardTypes[0].name}</p>
                <div className="main-card">
                    <div className="row justify-content-between">
                        <div className="col-lg-4">
                            <div className="mc-img">
                                <img src="https://unibank.az/uploads/items/o_1g04kl6mn107c1a6lc6btp4pfda.gif" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="mc-text">
                                <div className="mc-text-header">
                                    <div className="mc-text-left">
                                        UCard
                                    </div>
                                    <div className="mc-text-right">
                                        <a href="">Ətraflı 
                                            <span className="icon"><i className="fa-solid fa-arrow-right-long"></i></span>
                                        </a>
                                    </div>
                                </div>
                            <div className="mc-text-desc">
                                UCard - kredit və multivalyutalı debet kartını özündə birləşdirən tək kartdır.
                            </div>
                        <div className="mc-text-bottom">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-4 txt_btm">
                                    <span className="icon icon1"></span>
                                        <div className="mc-text-value">
                                            Multivalyutalı
                                            <br />
                                            tək kart
                                        </div>
                                    </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-4 txt_btm">
                                    <span className="icon icon2"></span>
                                        <div className="mc-text-value">
                                            40 günədək
                                            <br />
                                            faizsiz kredit
                                        </div>
                                    </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-4 txt_btm">
                                    <span className="icon icon3"></span>
                                        <div className="mc-text-value">
                                            30%-dək
                                            <br />
                                            keşbek
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mc-text-right mc-text-hidden-desktop">
                                <a href="">Ətraflı 
                                    <span className="icon"><i className="fa-solid fa-arrow-right-long"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>   
                </div>
                <p className="cards-header">{cardTypes[1].name}</p>
                <div className="debet-cards">
                    <div className="row g-3 flex-wrap justify-content-between">
                        {
                        cards.map((item,id) => (
                         <div key={id} className="col-lg-6 debet-cards-w">
                            <div className="debet-card-box">
                                <div className="debet-card">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <img src={item.img} alt="" />
                                            <div className="debet-card-text">
                                                <div className="ct-head">{item.cardName}</div>
                                                <div className="ct-desc">{item.cardDesc}</div>
                                                <div className="ct-price"><span>{item.price}</span> AZN</div>
                                                <div className="ct-btn">
                                                    <a data-card={item.id} className="add-btn-card" href="#">Səbətə əlavə et
                                                        <span className="icon"><i className="fa-solid fa-arrow-right-long"></i></span>
                                                     </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))
                        }
                    </div>
                </div>
                <p className="cards-header">{cardTypes[2].name}</p>
                <div className="row g-3 flex-wrap justify-content-between">
                    {
                        otherCards.map((item,id) => (
                        <div key={id} className="col-lg-6 debet-cards-w">
                            <div className="debet-card-box">
                                <div className="debet-card">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <img src={item.img} alt="" />
                                            <div className="debet-card-text">
                                                <div className="ct-head">{item.cardName}</div>
                                                <div className="ct-desc">{item.cardDesc}</div>
                                                <div className="ct-price"><span>{item.price}</span> AZN</div>
                                                <div className="ct-btn">
                                                    <a data-card={item.id} className="add-btn-card2" href="#">Səbətə əlavə et
                                                        <span className="icon"><i className="fa-solid fa-arrow-right-long"></i></span>
                                                     </a>
                                                    {item.id===3 && <a  className="btn-partner" href="">Partnyorlar
                                                        <span className="icon"></span>
                                                    </a>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Cards