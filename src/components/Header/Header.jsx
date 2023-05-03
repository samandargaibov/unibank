import React from 'react';
import './Header.scss'
import HeaderMenu from './HeaderMenu';
import HeaderMobile from './HeaderMobile';
import SearchModal from '../SearchModal/SearchModal';
import { useState } from 'react';
import '../SearchModal/SearchModal.scss';

function Header() {

    const [isSearch,setIsSearch] = useState(false);
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if (theme === 'light'){
            setTheme('dark');
            document.body.className = 'dark'
        }
        else{
            setTheme('light');
            document.body.className = 'light'
        }
    }

    return(
        <header className='header'>
            <div id={theme} className="header_top">
                <div className="container">
                    <div className="header-top-wrapper">
                        <div className="header-flexbox">
                            <div className="logo">
                                <a href="/">
                                    <img src="https://unibank.az/assets/images/logonew-orange1.png" alt="logo" />
                                </a>
                            </div>
                            <div className="header-menu">
                                <a className="header-menu-link" href="/services">Xidmət şəbəkəsi</a>
                                <a className="header-menu-link" href="">Bank haqqında</a>
                                <a className="header-menu-link" href="">Keşbek</a>
                                <a className="header-menu-link" href="">Tariflər</a>
                                <a className="header-menu-link" href="/hr">İnsan Resursları</a>
                                <a className="header-menu-link" href="">Bankla əlaqə və təkliflər</a>
                            </div>
                        </div>
                        <div className="header-right">
                            <div className="header-right-types">
                                <a className='header-right-type hr-active' href="">Fərdi</a>
                                <a className='header-right-type' href="">Biznes</a>
                            </div>
                            <div onClick={toggleTheme} className={`header-right-theme ${theme}`}>
                                {
                                    theme === 'light' ? 
                                    <a href="#">
                                        <i className="fa-brands fa-affiliatetheme"></i>
                                    </a>
                                    :
                                    <a href="#">
                                        <i id={theme} class="fa-solid fa-sun"></i>
                                    </a>
                                }
                                
                            </div>
                            <div id={theme} className="header-right-lang">
                                <a id={theme} className='lang-item' href="">ENG</a>
                                <a id={theme} className='lang-item' href="">RUS</a>
                            </div>
                            <div  className="header-right-search">
                                <a onClick={() => setIsSearch(!isSearch)} id='search' href="#">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </a>
                                {
                                    isSearch && <SearchModal isSearch={isSearch} setIsSearch={setIsSearch}/>
                                } 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HeaderMenu/>
            <HeaderMobile/>
        </header>
    )
    
}
export default Header


        