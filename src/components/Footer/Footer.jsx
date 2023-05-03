import React from "react";
import './Footer.scss';

const Footer = () => {
    return(
        <footer>
            <div className="footer-wrapper container">
                <div className="footer-menus">
                    <div className="footer-menu">
                        <a className="footer-header" href="/cards">Kartlar</a>
                        <div className="footer-contents">
                            <div className="footer-content">
                                <a href="/cards">Kartlar</a>
                            </div>
                            <div className="footer-content">
                                <a href="/cards">Debet kartlar</a>
                            </div>
                            <div className="footer-content">
                                <a href="/cards">Digər</a>
                            </div>
                            
                        </div>
                    </div>
                    <div className="footer-menu">
                        <a className="footer-header" href="#">Kreditlər</a>
                        <div className="footer-contents">
                            <div className="footer-content">
                                <a href="#">Nağd</a>
                            </div>
                            <div className="footer-content">
                                <a href="#">Mikro</a>
                            </div>
                            <div className="footer-content">
                                <a href="#">İpoteka</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-menu">
                        <a className="footer-header" href="">Əmanətlər</a>
                        <div className="footer-contents">
                            <div className="footer-content">
                                <a href="#">Müddətli</a>
                            </div>
                            <div className="footer-content">
                                <a href="#">Proqressiv</a>
                            </div>
                            <div className="footer-content">
                                <a href="#">Yığım</a>
                            </div>
                            <div className="footer-content">
                                <a href="#">Faizlər əvvəlcədən</a>
                            </div>
                            <div className="footer-content">
                                <a href="#">Topla</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-menu">
                        <a className="footer-header" href="">Köçürmələr</a>
                        <div className="footer-contents">
                            <div className="footer-content">
                                <a href="#">Ölkəxarici</a>
                            </div>
                            <div className="footer-content">
                                <a href="#">Ölkədaxili</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-menu">
                        <a className="footer-header" href="">Rəqəmsal bankçılıq</a>
                        <div className="footer-contents">
                            <div className="footer-content">
                                <a href="#">UBank</a>
                            </div>
                            <div className="footer-content">
                                <a href="#">İnternet bankçılıq</a>
                            </div>
                            <div className="footer-content">
                                <a href="#">Şəxsi kabinet</a>
                            </div>
                            <div className="footer-content">
                                <a href="#">Unimiles şəxsi kabinet</a>
                            </div>
                            <div className="footer-content">
                                <a href="#">Onlayn kredit ödənişi</a>
                            </div>
                            <div className="footer-content">
                                <a href="#">Onlayn kredit müraciəti</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-menu">
                        <a className="footer-header" href="#">Əlavə xidmətlər</a>
                        <div className="footer-contents">
                            <div className="footer-content">
                                <a href="#">Hesablaşma-kassa xidməti</a>
                            </div>
                            <div className="footer-content">
                                <a href="#">POS terminal / Smart kassa</a>
                            </div>
                            <div className="footer-content">
                                <a href="#">Depozit qutuları</a>
                            </div>
                            <div className="footer-content">
                                <a href="#">Onlayn ticarət (eCommerce)</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-menu">
                        <a className="footer-header" href="#">Bank haqqında</a>
                        <div className="footer-contents">
                            <div className="footer-content">
                                <a href="hr">Rəhbərlik</a>
                            </div>
                            <div className="footer-content">
                                <a href="#">Müxbir hesablar</a>
                            </div>
                            <div className="footer-content">
                                <a href="#">Təklif və Şikayətlər</a>
                            </div>
                            <div className="footer-content">
                                <a href="/hr">İnsan resursları</a>
                            </div>
                            <div className="footer-content">
                                <a href="#">Hesabatlar</a>
                            </div>
                            <div className="footer-content">
                                <a href="#">Digər sənədlər</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-social-media">
                    <a href="#">
                        <span className="icon footer-icon icon-apple">
                            <i className="fa-brands fa-apple active-icon"></i>
                        </span>
                    </a>
                    <a href="#">
                        <span className="icon footer-icon icon-apple">
                                <i className="fa-brands fa-android"></i>
                        </span>
                    </a>
                    <a href="#">
                        <span className="icon footer-icon icon-apple">
                                <i style={{padding: '6px 10px'}} className="fa-brands fa-facebook-f fa-gray"></i>
                        </span>
                    </a>
                    <a href="#">
                        <span className="icon footer-icon icon-apple">
                                <i className="fa-brands fa-twitter fa-gray"></i>
                        </span>
                    </a>
                    <a href="#">
                        <span className="icon footer-icon icon-apple">
                                <i className="fa-brands fa-linkedin-in fa-gray"></i>
                        </span>
                    </a>
                    <a href="#">
                        <span className="icon footer-icon icon-apple">
                                <i className="fa-brands fa-youtube fa-gray"></i>
                        </span>
                    </a>
                    <a href="#">
                        <span className="icon footer-icon icon-apple">
                                <i className="fa-brands fa-instagram fa-gray"></i>
                        </span>
                    </a>
                    <a href="#">
                        <span className="icon footer-icon icon-apple">
                                <i className="fa-brands fa-telegram fa-gray"></i>
                        </span>
                    </a>
                </div>
                <div className="footer-partners">
                    <div className="footer-left">
                        <div className="footer-left-text">© 2023, Unibank - Sənin Bankın </div>
                        <div className="footer-left-text footer-left-text-reserve">Bütün hüquqlar qorunur.</div>
                    </div>
                    <div className="footer-right">
                        <a className="footer-partner" href="#">
                            <img src="https://unibank.az/assets/images/adif.png" alt="" />
                        </a>
                        <a className="footer-partner" href="#">
                            <img style={{width: '92px'}} src="https://avciya.az/wp-content/uploads/2021/02/Elektron-hokumet-1-650x399.jpg" alt="" />
                        </a>
                        <a className="footer-partner" href="#">
                            <img style={{width: '84px'}} src="https://unibank.az/assets/images/infobank.png?v4" alt="" />
                        </a>
                        <a className="footer-partner" href="#">
                            <img style={{width: '82px'}} src="https://unibank.az/assets/images/msp.png?v5" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer