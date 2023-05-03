import React from "react";
import './SearchModal.scss';
import { useState } from "react";

const SearchModal = ({setIsSearch, isSearch}) => {

 

    return (
        <>
        {
            isSearch &&
            <div className="searchmodal-wrapper">
            <div className="search-modal">
                <div className="sm-close">
                    <i onClick={() => setIsSearch(false)} className="fa-solid fa-xmark"></i>
                    <p>Axtarış</p>
                </div>
                <div className="sm-search">
                    <div className="form">
                        <input type="text" />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
        </div>
        </div>
        }
        </>
    )
}

export default SearchModal