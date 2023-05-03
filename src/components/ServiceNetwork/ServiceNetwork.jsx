import React from "react";
import './ServiceNetwork.scss';
import ServiceNetworkHeader from "../ServiceNetworkHeader/ServiceNetworkHeader";
import {bankFillial} from "../../../src/mockApi/mockApi"


const ServiceNetwork = () => {

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
        <div className="service-network-content-w">
            <div className="service-network-content">
                <ServiceNetworkHeader/>
                <div className="container">
                    <div id="google-map" className="google-map content-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24312.339148568262!2d49.820303693092335!3d40.38575302261345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d9a71479dcd%3A0x250c25957ee865c1!2sUnibank%20ATM!5e0!3m2!1sru!2saz!4v1682577641287!5m2!1sru!2saz" width="100%" height="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="container">
                    <div className="location-content location-content-exchange">
                        <div className="location-body lb-active">
                           {
                            bankFillial.map((item, id) => (
                                <div key={id} className="service-network-content">
                                    <div className="sn-content-wrapper">
                                        <div className="loc-items">
                                            <div className="content-name">
                                                <p>{item.branchName}</p>
                                                <div className="c-text">{item.address}</div>
                                            </div>
                                            <div className="content-weekdays content-g-res">
                                                <span className="icon">
                                                    <i className="fa-regular fa-clock"></i>
                                                </span>
                                                <div>{item.workHours}
                                                    <br />
                                                    {item.relaxHours}
                                                </div>
                                            </div>
                                            <div className="content-info content-g-res">
                                                <span className="icon">
                                                    <i className="fa-regular fa-clock"></i>
                                                </span>
                                                    {item.info}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                           }
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="bottom-info">
                        <div className="bottom-info-wrapper">
                            <div className="info-icon"></div>
                            <div className="btm-info-content">
                                <p>Qeyd: 17:00-dan sonra kart və kredit üzrə xidmətlər göstərilir.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceNetwork