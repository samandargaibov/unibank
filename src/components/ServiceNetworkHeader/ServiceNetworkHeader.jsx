import React, {useState} from "react";
import './ServiceNetworkHeader.scss';
import { networkServices } from "../../mockApi/mockApi";

const ServiceNetworkHeader = () => {
    const [isSelected,setIsSelected] = useState(1);

    const handleClick = (e) => {
        setIsSelected(e)
    }

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

    return(
        <div className="container content-w">
            <h1>Xidmət şəbəkəsi</h1>
            <div className="sn-links hidden-mobile">
                {
                    networkServices.map((item,id) => (
                        <span key={id}>
                        <a onClick={()=> handleClick(item.id)}
                        className={`sn-item sn-item-active-bg-white sn-item-bg ${isSelected === item.id ? 'sn-item-active' : ''}`} href="#">
                        {item.branches}</a>
                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default ServiceNetworkHeader