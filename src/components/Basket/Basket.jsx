import React from "react";
import './Basket.scss';

const Basket = () => {   

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

    const totalPrice = lastArray[0]?.map((item) => item.price)
    const sumRes = totalPrice?.reduce((acc, cur) => (acc + cur), 0)
    
    return (
        <div className="wrapper">
                <div className="d-flex align-items-center justify-content-between">
                   <div className="d-flex flex-column">
                       <div className="h3">Cards</div>
                   </div>
                </div>
            <div id="table" className="bg-white rounded">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="text-uppercase header">Məhsul</th>
                                <th scope="col" className="text-uppercase">Miqdar</th>
                                <th scope="col" className="text-uppercase">Qiymət</th>
                                <th scope="col" className="text-uppercase">Toplam</th>
                            </tr>
                        </thead>
                        <tbody id='cart-shopping'>
                            {
                            lastArray[0]?.map((item, id) => (
                                <tr key={id}>
                                <td className="item">
                                    <div className="d-flex align-items-center">
                                        <img style={{marginRight: '15px'}} src={item.img} alt={item.cardName}></img>
                                        <div className="basket-card">{item.cardName}</div>
                                    </div>
                                </td>
                                <td>{item.count}</td>
                                <td>{item.price} <i className="fa-solid fa-manat-sign"></i></td>
                                <td className="font-weight-bold">{item.price} <i className="fa-solid fa-manat-sign"></i></td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <div className="d-flex flex-column justify-content-end align-items-end">
                    <div className="d-flex px-3 pr-md-5 py-1 subtotal align-items-center">
                        <div className="px-4 mb-1">Toplam</div>
                        <div className="h5 font-weight-bold px-md-2">{sumRes} <i className="fa-solid fa-manat-sign"></i></div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Basket