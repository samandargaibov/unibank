import React from "react";
import './AppBar.scss';
import AppBarUbank from "./AppBarUbank";

const Appbar = () => {
    return (
        <div className="appbar">
            <div className="container">
                <div className="row appbar_wrapper">
                    <div className="col-lg-6 col-md-12">
                        <div className="appbar-left">
                            <img src="https://unibank.az/assets/static/Ucard/ucard.webp" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="appbar-right">
                            <h2 className="appbar_header">Sənin kartın - UCarddır!</h2>
                            <div className="ar-desc">
                                Bu kart sənə dünyanın istənilən yerində multivalyutalı hesablarla alış-veriş imkanı, 10 000 ₼-dək və 40 günədək faizsiz kredit xətti, 30%-dək keşbek və illik 6%-dək gəlir əldə etmək imkanı verir. Bir sözlə, bütün ehtiyaclar tək kartda!
                            </div>
                            <div className="ar-extras">
                                <div className="ar-extras-v">
                                <a href="#">Ətraflı</a>
                                <a href="#">Partnyorlar</a>
                                <a href="#">Şəxsi kabinet</a>
                                </div>
                            </div>
                            <div className="ar-extras ar-extras-mobile d-none">
                            <div className="ar-extras-btn">
                                    <a href="#">Ətraflı</a>
                                </div>
                                <div className="ar-extras-btn-btm">
                                    <a href="#">Partnyorlar</a>
                                    <a href="#">Şəxsi kabinet</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AppBarUbank/>
        </div>
    )
}

export default Appbar