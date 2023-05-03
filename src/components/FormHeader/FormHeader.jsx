import React, {useState} from "react";
import './FormHeader.scss';
import FormContent from "../FormContent/FormContent";

const FormHeader = () => {
    const [isSelected, setIsSelected] = useState(1)

    const languageArr = [
        {id: 1, value: "AZ"},
        {id: 2, value: "RU"},
        {id: 3, value: "EN"},
    ]

    const handleClick = (e) => {
        setIsSelected(e)
    }

    return (
        <div className="form-body">
            <div className="form-header">
                <div className="form-header-wrapper">
                    <div className="header">
                        <div className="logo">
                            <a href="/">
                            <img src="https://online.unibank.az/ibank/resources/imgs/icons/main-logo.png" alt="" />
                            </a>
                        </div>
                        <div className="langs">
                            {languageArr.map((item) => (
                                <div className ='mr-left'
                                    key ={item.id}
                                    onClick={() => handleClick(item.id)}
                                    style={{
                                        borderBottom: isSelected === item.id ? "1px solid" : ""
                                    }}
                                    >
                                    {item.value}</div>
                            ))}
                        </div>
                    </div>
                    <FormContent/>
                </div>
            </div>
        </div>
    )
}

export default FormHeader