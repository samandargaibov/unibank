import React from 'react';
import './HeaderMobile.scss'
import { useState } from 'react';

const HeaderMobile = () => {
    const [isMenu,setIsMenu] = useState(true)

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
    
    const clickHandler = () => {
        setIsMenu(!isMenu);
        if(isMenu){
            document.body.classList.add('for-mobile-body')
        }
        else{
            document.body.classList.remove('for-mobile-body')
        }
    }

    return (
        <div className='topbar-mobile d-none'>
            <div className="container">
                <div className="topbar-mobile-wrapper">
                    <div onClick={clickHandler} className="burger-menu">
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <div className="mobile-logo">
                        <a href="/">
                            <img className='mob-logo' src="https://unibank.az/assets/images/orange.png" alt="" />
                        </a>
                    </div>
                    <span className="mob-icons">
                    <a className='mobile-a' href="basket"><i class="fa-solid fa-cart-shopping"></i><span className='basket'>0</span></a>
                    <a className='mobile-a' href="tel:117"><i className="fa-solid fa-phone"></i>117</a>
                    </span>
                    
                </div>
                <div className={`menu-modal ${isMenu ? 'd-none' : ''}`}>
                    <div className="menu-bar">
                        <div className="container">
                            <div className="menu-wrapper">
                                <div className="mob-header">
                                    <a className='active-mob-a' href="#">Ferdi</a>
                                    <a className='deactive-mob-a' href="#">Biznes</a>
                                </div>
                                <div className="menubar-menus">
                                    <div className="menubar-menu menubar-first">
                                        <a href="/cards">Kartlar</a>
                                    </div>
                                    <div className="menubar-menu">
                                        <a href="">Kreditler</a>
                                    </div>
                                    <div className="menubar-menu">
                                        <a href="">Əmanətlər</a>
                                    </div>
                                    <div className="menubar-menu">
                                        <a href="">Köçürmələr</a>
                                    </div>
                                    <div className="menubar-menu">
                                        <a href="">Rəqəmsal bankçılıq</a>
                                    </div>
                                    <div className="menubar-menu">
                                        <a href="">Əlavə xidmətlər</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="menu-footer">
                        <div className="container">
                            <div className="menu-footer-w">
                                <a href="">F.A.Q</a>
                                <a href="/services">Xidmət şəbəkəsi</a>
                                <a href="">Bank haqqında</a>
                                <a href="">Keşbek</a>
                                <a href="">Tariflər</a>
                                <a href="/hr">İnsan Resursları</a>
                                <a href="">Bankla əlaqə və təkliflər</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMobile