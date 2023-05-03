import React from "react";
import Slider from "../../components/Slider/Slider";
import Statistic from "../../components/Statistic/Statistic";
import Exchange from "../../components/Exchange/Exchange";
import News from "../../components/News/News";
import LocationATM from "../../components/LocationATM/LocationATM";
import Appbar from "../../components/AppBar/AppBar";
import OnlineChat from "../../components/OnlineChat/OnlineChat";

const HomePage = () => {
    return (
        <div>
            <Slider/>
            <Statistic/>
            <Appbar/>
            <Exchange/>
            <News/>
            <LocationATM/>
            <OnlineChat/>
        </div>
    )
}

export default HomePage