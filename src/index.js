import ReactDOM from 'react-dom/client';
import App from './App';
import './css/style.scss';
import React from "react";
import CardsProvider from './contexts/CardsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CardsProvider>
        <App/>
    </CardsProvider>
    
);

