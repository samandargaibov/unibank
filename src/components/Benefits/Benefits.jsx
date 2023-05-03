import React from "react";
import './Benefits.scss';
import { hrBenefits } from "../../mockApi/mockApi";

const Benefits = () => {
    return (
        <div className="row g-2 hr-benefits-container">
            {
                hrBenefits.map((item,id) => (
                    <div className="col-lg-3">
                        <div className="hr-benefits">
                            <div className="benefits-box">
                                <div className="benefit-icon">
                                    <i className="fa-regular fa-circle-check"></i>
                                </div>
                                <div key={id} className="benefit-text">{item.desc}</div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Benefits