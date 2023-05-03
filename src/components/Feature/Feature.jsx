import React from "react";
import './Feature.scss';
import { hrFeatures } from "../../../src/mockApi/mockApi";

const Feature = () => {
    console.log(hrFeatures);
    return(
        <div className="content-wrapper content-padding">
            <div className="feature-mr">
                <div className="row g-2">
                {
                    hrFeatures.map((item,id) => (
                        <div className="col-lg-4 feature-box">
                            <div className="feature feature-holder feature-orange">
                                <div className="feature-wrapper">
                                    <img className='feature-icon icon' src={item.img} alt="" />
                                    <div className="feature-body">
                                        <div className="feature-head">{item.infoHead}</div>
                                        <div className="feature-desc">{item.infoDesc}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default Feature