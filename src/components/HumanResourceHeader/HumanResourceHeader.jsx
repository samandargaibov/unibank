import React, {useState} from "react";
import './HumanResourceHeader.scss';
import { hrServices } from "../../mockApi/mockApi";

const HumanResourceHeader = () => {
    const [isSelected,setIsSelected] = useState(1);

    const handleClick = (e) => {
        setIsSelected(e)
    }

    return(
        <div className="container content-w">
            <h1>İnsan resursları</h1>
            <div className="sn-links hidden-mobile">
                {
                    hrServices.map((item,id) => (
                        <span key={id}>
                        <a onClick={()=> handleClick(item.id)}
                        className={`sn-item sn-item-active-bg-white sn-item-bg ${isSelected === item.id ? 'sn-item-active' : ''}`} href="#">
                        {item.branches}</a>
                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default HumanResourceHeader