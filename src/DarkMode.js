import React from "react";

const DarkMode = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
    }
    const toggleTheme = (e) => {
        if(e.target.value) setDarkMode();
        else setLightMode();
    }
    const selectedTheme = localStorage.getItem("selectedTheme");
    if(selectedTheme === 'dark') {
        setDarkMode();
    }
    return (
        <div>
            <button onClick={toggleTheme}>Change Mode</button>
        </div>
    )
}

export default DarkMode