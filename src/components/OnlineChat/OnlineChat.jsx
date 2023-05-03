import React from "react";
import './OnlineChat.scss';
import { useState } from "react";

const OnlineChat = () => {
    const [isOpen, setIsOpen] = useState(false);

    const clickHandler = () => {
        setIsOpen(true);
    }
    
    return (
        <>
        <div className="chat">
            <div onClick={clickHandler} className={`chat2 ${isOpen ? 'd-none' : ''}`}>
                <div className="iconn">
                    <button><i className="fa-regular fa-message"></i></button>
                </div>
            </div>
        </div>
        <div className={`open-chat ${!isOpen ? 'd-none' : ''}`}>
            <div className={`chat-card ${!isOpen ? 'd-none' : ''}`}>
                <div className="chat-header">
                    <button className="three-dots"><i class="fa-solid fa-ellipsis"></i></button>
                    <div className="header-text">Online konsultasiyaya xoş gəldiniz!</div>
                    <button onClick={()=>setIsOpen(false)} className="close-chat"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div className="chat-body">
                    <div className="body-content">
                        <div className="content-w">
                            <div className="chat-close-text">
                                <div className="chat-logo">
                                    <i class="fa-solid fa-user"></i>
                                </div>
                                <div className="form-chat">
                                    <form action="">
                                        <div className="form-inputs">
                                            <div className="form-display">
                                                <div className="form-text">Unibankın online konsultasiyasına  xoş gəldiniz!</div>
                                            </div>
                                        </div>
                                        <div className="form-inputs">
                                            <div className="form-display">
                                                <label htmlFor="">Adınız:</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="form-inputs">
                                            <div className="form-display">
                                                <label htmlFor="">E-mail:</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="form-inputs">
                                            <div className="form-display">
                                                <label htmlFor="">Əlaqə nömrəniz:</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="form-inputs">
                                            <div className="form-display">
                                                <label htmlFor="">Sual:</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="form-inputs">
                                            <div className="form-display">
                                                <button>
                                                    <span>Çata başlayın</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default OnlineChat