import React from "react";
import './Statistic.scss';
import { statistic } from "../../mockApi/mockApi";

const Statistic = () => {
    return (
        <div style={{padding: '30px 0'}}>
            <div className="container">
                <div className="row g-3">
                    {
                        statistic.map((item,id) => (
                            <div key={id} className="statistic-box-g col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="statistic-box">
                                    <div className="sb-general">
                                        <div className="sb-head">
                                            {item.header}
                                        </div>
                                        <div className="sb-percent">
                                            {item.percent}
                                        </div>
                                        <div className="sb-content">
                                            {item.content}
                                        </div>
                                        <div className="sb-btn">
                                            <a href="#">{item.button}</a>
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

export default Statistic