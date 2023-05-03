import React from 'react';
import './HeaderMenu.scss'
import '../../localstorage';

const HeaderMenu = () => {
    return (
        <div>
            <div className="container">
                <div className="header--menu">
                    <div className="menu-left">
                        <div className="menubar-menu menu-first">
                            <a href="/cards">Kartlar</a>
                        </div>
                        <div className="menubar-menu">
                            <a href="#">Kreditlər</a>
                        </div>
                        <div className="menubar-menu">
                            <a href="#">Əmanətlər</a>
                        </div>
                        <div className="menubar-menu">
                            <a href="#">Köçürmələr</a>
                        </div>
                        <div className="menubar-menu">
                            <a href="#">Rəqəmsal bankçılıq</a>
                        </div>
                        <div className="menubar-menu">
                            <a href="#">Əlavə xidmətlər</a>
                        </div>
                    </div>
                    <div className="menu-right">
                        <a className='right-contact menubar-hotline menubar-button menubar-ibanking button-gr rg-button' href="basket"><i class="fa-solid fa-cart-shopping"></i><span className='basket'>0</span></a>
                        <a className='right-contact menubar-hotline menubar-button menubar-ibanking button-gr rg-button' href="tel:117"><i className="fa-solid fa-phone"></i>117</a>
                        <a className='right-ibanking menubar-hotline menubar-button menubar-ibanking button-gr rg-button me-0' href="/ibanking"><i className="fa-solid fa-circle-arrow-right"></i>İnternet bankçılıq</a>
                    </div>
                </div>
            </div>
            <div style={{clear: "both", float: 'none'}}></div>
        </div> 
    )
}

export default HeaderMenu