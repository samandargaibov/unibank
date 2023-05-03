import React from "react";
import './HRValues.scss';
import { hrValues } from "../../mockApi/mockApi";

const HRValues = () => {
    return (
        <div className="hr-values-content">
            <h2>{hrValues[0].header}</h2>
            <div className="row g-3">
                {
                    hrValues.map((item,id) => (
                        <div key={id} className="col-lg-3">
                            <div className="hr-values">
                                <div className="values-box">
                                    <div className="value-header">{item.textHead}</div>
                                    <div className="value-desc">{item.textBody}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HRValues