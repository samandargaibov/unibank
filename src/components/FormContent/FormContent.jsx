import React from "react";
import './FormContent.scss';
import { useState } from "react";

const FormContent = () => {
    const [isFin, setIsFin] = useState(true);
    const [isAsanImza, setIsAsanImza] = useState(true);
    const [isShowBanner, setIsShowBanner] = useState(true);
    const [isBtnClick, setIsBtnClick] = useState(true);

    const buttonClickHandler = (e) => {
        if(e.currentTarget.className.match('light')){
            e.currentTarget.classList.remove('light');
            e.currentTarget.classList.add('dark');
        }
        else{
            e.currentTarget.classList.add('light');
            e.currentTarget.classList.remove('dark');
        }
        
    };

    const clickAsan = () => {
        setIsFin(false);
        setIsBtnClick(false)
    }

    const clickFin = () => {
        setIsFin(true)
        setIsBtnClick(true)
    }

    const changeBanner1 = () => {
        setIsShowBanner(true);
    }
    const changeBanner2 = () => {
        setIsShowBanner(false);
    }

    return (
        <div className="content-login">
            <div className="left-content">
                <div className="slide-info">
                    {
                        isShowBanner ? 
                        
                        <div className="card-items hide fade1 show">
                            <div className="card-img">
                                <img src="	https://online.unibank.az/ibank/resources/imgs/icons/cards/slide-img-1.png" alt="" />
                            </div>
                        <div className="card-info">
                            <h4>Bir ekranda hər şeyi idarə et!</h4>
                            <p>Filiala getmədən, UBank-la bank əməliyyatlarını bir ekranda et!</p>
                        </div>
                    </div>
                    :
                    <div className="card-items hide fade1 show">
                        <div className="card-img">
                            <img src="https://online.unibank.az/ibank/resources/imgs/icons/cards/slide-img-2.png" alt="" />
                        </div>
                        <div className="card-info">
                            <h4>Bir toxunuşla istənilən yerə köçürmə et!</h4>
                            <p>UBank vasitəsilə Western Union, Zolotaya Korona, CONTACT pul köçürmə sistemləri üzərindən bir toxunuşla dünyanın istənilən nöqtəsinə sürətli pul göndər!</p>
                        </div>
                    </div>
                    
                    
                    }
                    <div className="slide-page">
                    
                        <span id="active" onClick={changeBanner1}><i className={`fa-solid fa-circle dot ${isShowBanner ? 'active-dot' : ''}`}></i></span>
                        <span onClick={changeBanner2}><i className={`fa-solid fa-circle dot ${isShowBanner ? '' : 'active-dot'}`}></i></span>
                    </div>
                </div>
            </div>
            <div className="right-content">
                <form action="">
                    <div className="login-form">
                        <div className="header-text">
                            <div className="header-left">İnternet Bankçılığa giriş</div>
                            <div onClick={buttonClickHandler} className="header-right"><a href="#">Qeydiyyat</a></div>
                        </div>
                        <div className="qr-code-wrapper">
                            <div className="qr-code">
                                <img className="qr-img" src="https://online.unibank.az/ibank/qrCode?attr=b63772a2cc" alt="" />
                            </div>
                        </div>
                        
                        <div className="login-type-btns">
                            <div className={`type-active ${isBtnClick ? 'border-cl' : 'border-active'}`} onClick={() => clickFin(!isFin)}>
                                <div className='by-fin'>
                                    <img src="https://online.unibank.az/ibank/resources/imgs/icons/login-mobile.png" alt="" />
                                    <span id="fin">FİN kod ilə</span>
                                </div>
                            </div> 
                            
                            <div className={`type ${isBtnClick ? '' : 'border-cl'}`} onClick={() => clickAsan(!isAsanImza)}>
                                <div className='by-asan'>
                                    <img src="https://online.unibank.az/ibank/resources/imgs/icons/asan.png" alt="" />
                                    <span id="asan">Asan İmza</span>
                                </div>
                            </div>
                        </div>
                        <div className="info-wrapper">
                            <img src="https://online.unibank.az/ibank/resources/imgs/icons/login-info.png" alt="" />
                            QR kod ilə giriş üçün UBank-dan istifadə et
                        </div>
                        <div className="login-content">
                            <div className="login-inputs">
                                <div className="group">
                                    {
                                        isFin ?
                                        <div className='fin'>
                                        <img src="https://online.unibank.az/ibank/resources/imgs/icons/account.png" alt="" />
                                        <input type="text" />
                                        <img className="info-icon" src="https://online.unibank.az/ibank/resources/imgs/icons/login-info.png" alt="" />
                                        <span className="bar">
                                            <label htmlFor="">Şəxsiyyət vəsiqəsinin FİN kodu</label>
                                        </span>
                                    </div> 
                                    :
                                        <div className="asan">
                                            <img src="https://online.unibank.az/ibank/resources/imgs/icons/login-mobile.png" alt="" />
                                            <input type="text" placeholder="Mobil nömrə"/>
                                        </div>
                                    }
                                    
                                </div>
                                <div className="group">
                                    {
                                        isFin ?
                                    <div className='fin'>
                                    <img src="https://online.unibank.az/ibank/resources/imgs/icons/lock.png" alt="" />
                                    <input type="password" />
                                    <span className="bar">
                                        <label htmlFor="">Şifrə</label>
                                    </span>
                                    </div>
                                    :
                                        <div className="asan">
                                            <img src="https://online.unibank.az/ibank/resources/imgs/icons/asan-key.png" alt="" />
                                            <input type="text" placeholder="İstifadəçi ID-si"/>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="login-bottom-inputs">
                                {
                                    isFin &&
                                    <>
                                    <div className='code-type fin'>
                                        <div className="group">
                                            <input type="text" />
                                            <img className="captcha" src="https://online.unibank.az/ibank/captcha?attr=ee1450156f" alt="" />
                                            <span className="bar"></span>
                                            <label htmlFor="">Kodu daxil edin</label>
                                        </div>
                                    </div>
                                    <div className='forgot-password fin'>
                                        <a href="">Şifrəni unutmusuz?</a>
                                    </div>
                                    </>
                                }
                                
                                <div className="input-btn">
                                    <input type="submit" value='Daxil ol'/>
                                    <img src="https://online.unibank.az/ibank/resources/imgs/icons/arrow-right-login.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormContent