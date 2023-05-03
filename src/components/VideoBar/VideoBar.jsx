import React, { useState } from "react";
import './VideoBar.scss';

const VideoBar = () => {
    const [isClicked, setIsClicked] = useState(false);

    const clickHandler = () =>{
        setIsClicked(true)
    }

    return (
        <div className="videobar">
            <div onClick={clickHandler} className={`videobar-overlay ${isClicked ? 'd-none' : ''}`}>
                <div className='videobar-w'>
                    <div className="player">
                        <div className="container text-center">
                            <div className="videobar-icon">
                                <i className="fa-regular fa-circle-play"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <iframe className={`${!isClicked ? 'd-none ' : 'd-inline'}`} width="100%" height="400" src="https://www.youtube.com/embed/ricGtmUDcLU" title="Unibank - İnsan resursları" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen='1'></iframe>
        </div>
    )
}

export default VideoBar
