import React from "react";
import './LocationATM.scss';

const LocationATM = () =>{
    return(
        <div className="container">
            <div className="row g-2 justify-content-between">
                <div className="col-lg-8 loc-w">
                    <div className="location-general">
                        <div className="location-box loc-gen">
                            <div className="location-img">
                                <img src="https://unibank.az/assets/images/Bitmap.png" alt="" />
                            </div>
                            <h2 className="loc-h2">Xidmət şəbəkəsi</h2>
                            <p className="loc-p">Filial və UTM-lərin ünvanları, həmçinin - iş saatları və digər məlumatlar haqqında ətraflı.</p>
                            <a className="loc-btn" href="">Daha ətraflı</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 loc-w">
                    <div className="location-questions-general">
                        <div className="location-questions">
                            <div className="loc-questions-img">
                                <img src="https://unibank.az/assets/images/callcenter.svg" alt="" />
                            </div>
                            <h2 className="loc-h2">Sualın var? Bizimlə əlaqə saxla!</h2>
                            <p style={{width: '90%'}} className="loc-p">Onlayn-məsləhətçi, 117 Çağrı mərkəzi və ya bank filiallarına müraciət et və suallarına cavab al. Rahat və asan!</p>
                            <a className="loc-btn loc-btn-res" href="">Daha ətraflı</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationATM