import React from "react";
import './Ceos.scss';
import { hrCeos } from "../../mockApi/mockApi";

const Ceos = () => {
    return (
        <div className="row g-2">
            {
                hrCeos.map((item,id) => (
                    <div key={id} className="col-lg-6">
                        <div className="ceos-w ceos=mr">
                            <div className="ceo-img">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="ceos-name">{item.fullName}</div>
                            <div className="ceos-management">{item.position}</div>
                            <div className="ceos-text">
                                <p>{item.text}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Ceos