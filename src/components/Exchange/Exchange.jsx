import React, {useState,useEffect} from "react";
import './Exchange.scss';
import axios from "axios";


const Exchange = () => {
    const current = new Date();
    const date = `${(current.getDate()).toString().padStart(2,0)}.${(current.getMonth()+1).toString().padStart(2,0)}.${current.getFullYear()}`;

    const [curUsd,setCurUsd]= useState([])
    const [curEur,setCurEur]= useState([])
    const [curRub,setCurRub]= useState([])
    const [curGbp,setCurGbp]= useState([])
    
    const getRatesUSD = async () => {
        const res = await axios.get('https://v6.exchangerate-api.com/v6/de9ce9dc1f9f89c00978acbe/latest/USD');
        const {conversion_rates} = res.data;


        const ratesTemp=[];
        for (const [symbol, rate] of Object.entries(conversion_rates)){
            
            ratesTemp.push({symbol, rate})
            
        }
        setCurUsd(ratesTemp);
        console.log("ratesTemp", ratesTemp);
        console.log('valyuta',ratesTemp[0].symbol);
    }

    const getRatesEUR = async () => {
        const res = await axios.get('https://v6.exchangerate-api.com/v6/de9ce9dc1f9f89c00978acbe/latest/EUR');
        const {conversion_rates} = res.data;


        const ratesTemp=[];
        for (const [symbol, rate] of Object.entries(conversion_rates)){
            
            ratesTemp.push({symbol, rate})
            
        }
        setCurEur(ratesTemp);
        console.log("ratesTemp", ratesTemp);
        console.log('valyuta',ratesTemp[0].symbol);
    }

    const getRatesRUB = async () => {
        const res = await axios.get('https://v6.exchangerate-api.com/v6/de9ce9dc1f9f89c00978acbe/latest/RUB');
        const {conversion_rates} = res.data;


        const ratesTemp=[];
        for (const [symbol, rate] of Object.entries(conversion_rates)){
            
            ratesTemp.push({symbol, rate})
            
        }
        setCurRub(ratesTemp);
        console.log("ratesTemp", ratesTemp);
        console.log('valyuta',ratesTemp[0].symbol);
    }

    const getRatesGBP = async () => {
        const res = await axios.get('https://v6.exchangerate-api.com/v6/de9ce9dc1f9f89c00978acbe/latest/GBP');
        const {conversion_rates} = res.data;


        const ratesTemp=[];
        for (const [symbol, rate] of Object.entries(conversion_rates)){
            
            ratesTemp.push({symbol, rate})
            
        }
        setCurGbp(ratesTemp);
        console.log("ratesTemp", ratesTemp);
        console.log('valyuta',ratesTemp[0].symbol);
    }
    
    let cartCards= [];
    if(localStorage.getItem('cards')=== null){
        localStorage.setItem('cards',JSON.stringify(cartCards));
    }
  
    let cardss = JSON.parse(localStorage.getItem('cards'));
    const lengthArr = cardss?.length;
    const lastArray = cardss?.slice(lengthArr - 1);
    const resultSum = lastArray[0]?.length;

    window.onload = function() {

        addBasket();
        function addBasket() {
            let badge = document.querySelector('.basket');
            if(resultSum === undefined){
                badge.innerText = 0;
            }
            else{
                badge.innerText = resultSum;
            }
        }
    }

    useEffect(() => {
        getRatesUSD();
        getRatesEUR();
        getRatesRUB();
        getRatesGBP();
    },[])

    return(
        <div className="exchange">
            <div className="container">
                <div className="exchange_wrapper">
                    <h2 className="appbar_header">Valyuta məzənnələri</h2>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="exchange_wrapper_cat">
                                <div className="hidden-mobile">
                                    <div className="exchange-box">
                                        <div className="exchange-header">
                                            Nağd
                                        </div>
                                        <div className="exchange-date">
                                            Yeniləndi {date}
                                        </div>
                                        <div className="exchange-body">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Valyuta</th>
                                                        <th>Alis</th>
                                                        <th>Satis</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                    <tr>
                                                        <td>{curUsd[0]?.symbol}</td>
                                                        <td>{curUsd[10]?.rate}</td>
                                                        <td>{((curUsd[10]?.rate*0.0021)+curUsd[10]?.rate)?.toFixed(4)}</td>
                                                    </tr>
                                                    }
                                                    {
                                                    <tr>
                                                        <td>{curEur[0]?.symbol}</td>
                                                        <td>{(curEur[10]?.rate)?.toFixed(4)}</td>
                                                        <td>{((curEur[10]?.rate*0.033)+curEur[10]?.rate)?.toFixed(4)}</td>
                                                    </tr>
                                                    }
                                                    {
                                                    <tr>
                                                        <td>{curRub[0]?.symbol}</td>
                                                        <td>{(curRub[10]?.rate)?.toFixed(4)}</td>
                                                        <td>{((curRub[10]?.rate*0.08)+curRub[10]?.rate)?.toFixed(4)}</td>
                                                    </tr>
                                                    }
                                                    {
                                                    <tr>
                                                        <td>{curGbp[0]?.symbol}</td>
                                                        <td>{curGbp[10]?.rate}</td>
                                                        <td>{((curGbp[10]?.rate*0.03)+curGbp[10]?.rate)?.toFixed(4)}</td>
                                                    </tr>
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="exchange_wrapper_cat">
                                <div className="hidden-mobile">
                                    <div className="exchange-box">
                                        <div className="exchange-header">
                                            Nağdsız
                                        </div>
                                        <div className="exchange-date">
                                            Yeniləndi {date}
                                        </div>
                                        <div className="exchange-body">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Valyuta</th>
                                                        <th>Alis</th>
                                                        <th>Satis</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                        {
                                                            <tr>
                                                                <td>{curUsd[0]?.symbol}</td>
                                                                <td>{(curUsd[10]?.rate-(curUsd[10]?.rate*0.0041))?.toFixed(4)}</td>
                                                                <td>{(((curUsd[10]?.rate-(curUsd[10]?.rate*0.0041))*0.0041)+(curUsd[10]?.rate-curUsd[10]?.rate*0.0041))?.toFixed(4)}</td>
                                                            </tr>
                                                        }
                                                        {
                                                            <tr>
                                                                <td>{curEur[0]?.symbol}</td>
                                                                <td>{((curEur[10]?.rate*0.0033)+curEur[10]?.rate)?.toFixed(4)}</td>
                                                                <td>{((((curEur[10]?.rate*0.0033)+curEur[10]?.rate)*0.033)+((curEur[10]?.rate*0.0033)+curEur[10]?.rate))?.toFixed(4)}</td>
                                                            </tr>
                                                        }
                                                        {
                                                        <tr>
                                                            <td>{curRub[0]?.symbol}</td>
                                                            <td>{((curRub[10]?.rate*0.01)+curRub[10]?.rate)?.toFixed(4)}</td>
                                                            <td>{((((curRub[10]?.rate*0.01)+curRub[10]?.rate)*0.08)+((curRub[10]?.rate*0.01)+curRub[10]?.rate))?.toFixed(4)}</td>
                                                        </tr>
                                                        }
                                                        { 
                                                        <tr>
                                                            <td>{curGbp[0]?.symbol}</td>
                                                            <td>{((curGbp[10]?.rate)-curGbp[10]?.rate*0.003)?.toFixed(4)}</td>
                                                            <td>{(((curGbp[10]?.rate)-curGbp[10]?.rate*0.003)+(((curGbp[10]?.rate)-curGbp[10]?.rate*0.003)*0.03))?.toFixed(4)}</td>
                                                        </tr>
                                                        }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="exchange_wrapper_cat">
                                <div className="hidden-mobile">
                                    <div className="exchange-box">
                                        <div className="exchange-header">
                                            Kart
                                        </div>
                                        <div className="exchange-date">
                                            Yeniləndi {date}
                                        </div>
                                        <div className="exchange-body">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Valyuta</th>
                                                        <th>Alis</th>
                                                        <th>Satis</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                        {
                                                            <tr>
                                                                <td>{curUsd[0]?.symbol}</td>
                                                                <td>{(curUsd[10]?.rate-(curUsd[10]?.rate*0.0033)).toFixed(4)}</td>
                                                                <td>{(((curUsd[10]?.rate-(curUsd[10]?.rate*0.0033))*0.0041)+(curUsd[10]?.rate-curUsd[10]?.rate*0.0033)).toFixed(4)}</td>
                                                            </tr>
                                                        }
                                                        {
                                                            <tr>
                                                                <td>{curEur[0]?.symbol}</td>
                                                                <td>{((curEur[10]?.rate*0.0053)+curEur[10]?.rate).toFixed(4)}</td>
                                                                <td>{((((curEur[10]?.rate*0.0053)+curEur[10]?.rate)*0.033)+((curEur[10]?.rate*0.0053)+curEur[10]?.rate)).toFixed(4)}</td>
                                                            </tr>
                                                        }
                                                        {
                                                        <tr>
                                                            <td>{curRub[0]?.symbol}</td>
                                                            <td>{((curRub[10]?.rate*0.025)+curRub[10]?.rate).toFixed(4)}</td>
                                                            <td>{((((curRub[10]?.rate*0.025)+curRub[10]?.rate)*0.06)+((curRub[10]?.rate*0.025)+curRub[10]?.rate)).toFixed(4)}</td>
                                                        </tr>
                                                        }
                                                        { 
                                                        <tr>
                                                            <td>{curGbp[0]?.symbol}</td>
                                                            <td>{((curGbp[10]?.rate)+curGbp[10]?.rate*0.005).toFixed(4)}</td>
                                                            <td>{(((curGbp[10]?.rate)+curGbp[10]?.rate*0.005)+(((curGbp[10]?.rate)+curGbp[10]?.rate*0.005)*0.022)).toFixed(4)}</td>
                                                        </tr>
                                                        }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="exchange-convertor">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-12">
                                <div className="exchange-header-con">
                                    <div className="exchange-header">
                                        Valyuta Kalkulyatoru
                                    </div>
                                    <div style={{marginBottom: '0'}} className="exchange-date">
                                        Nağd məzənnə əsasında hesablanır
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className="exchange-body-con d-flex">
                                    <div className="exchange-calc-left">
                                        <input type="number" placeholder="0"/>
                                        <div className="currency-select">
                                            <select className="select-currency sc-display" name="" id="" aria-hidden='true'>
                                                <option value="AZN">AZN</option>
                                                <option value="RUB">RUB</option>
                                            </select>
                                            <span className="select-container">
                                                <span className="selection-general">
                                                    <span className="selection">
                                                        <span className="selection_rendered">
                                                            <span className="exchange-flags">
                                                                <span className="flag-region flag-aze"></span>
                                                                AZN
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="exchange-calc-left e-calc-arrow">
                                    <input type="number" placeholder="0"/>
                                        <div className="currency-select">
                                            <select className="select-currency sc-display" name="" id="" aria-hidden='true'>
                                                <option value="AZN">AZN</option>
                                                <option value="USD">USD</option>
                                            </select>
                                            <span className="select-container">
                                                <span className="selection-general">
                                                    <span className="selection">
                                                        <span className="selection_rendered">
                                                            <span className="exchange-flags">
                                                                <span className="flag-region flag-us"></span>
                                                                USD
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Exchange