import * as React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./components/Layout/Layout";
import CardsPage from "./pages/Cards/CardsPage";
import ServiceNetworkPage from "./pages/ServiceNetwork/ServiceNetworkPage";
import HumanResourcesPage from "./pages/HumanResources/HumanResourcesPage";
import IbankingPage from "./pages/Ibanking/IbankingPage";
import SimpleSlider from "./components/Slider/Slider"
import BasketPage from "./pages/Basket/BasketPage";

function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Layout/>}>
                <Route index element = {<HomePage/>}/>
                <Route path="/cards" element = {<CardsPage/>}/>
                <Route path="/services" element = {<ServiceNetworkPage/>}/>
                <Route path="/hr" element = {<HumanResourcesPage/>}/>
                <Route path="/slider" element = {<SimpleSlider/>}/>
                <Route path="/basket" element = {<BasketPage/>}/>
            </Route>
            <Route path='/ibanking' element = {<IbankingPage/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default App
