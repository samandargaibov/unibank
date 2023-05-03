import React from "react";

const AppBarUbank = () => {
    return (
       <div className="appbar">
        <div className="container">
            <div className="row appbar_wrapper">
                <div className="col-lg-6 col-md-12">
                    <div className="appbar-right">
                        <h2 className="appbar_header">UBank</h2>
                        <div className="ar-desc">
                            UBank 24/7 bank xidmətlərinə çıxışı smartfonunda təmin edən mobil əlavədir. Ödənişlərini banka gəlmədən, telefonunuzda bir toxunuşla həyata keçir!
                        </div>
                        <div className="ar-links">
                            <a href="https://play.google.com/store/apps/details?id=az.unibank.mbanking" target="_blank" rel="noreferrer">
                                <div className="app-google-play"></div>
                            </a>
                            <a href="https://itunes.apple.com/ru/app/unibank-mobile/id1073632425" target="_blank" rel="noreferrer">
                                <div className="app-apple-store"></div>
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=az.unibank.mbanking" target="_blank" rel="noreferrer">
                                <div className="app-gallery-store"></div>
                            </a>
                        </div>
                        <div className="ar-extras ">
                            <a href="#" className="ubank-btn">Haqqında</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="appbar-left appbar-phone">
                        <img src="https://unibank.az/assets/images/appbar2.png" alt="" />
                    </div>
                </div>
            </div>
        </div>

       </div> 
    )
}

export default AppBarUbank