import React from "react";
import './News.scss';
import { news } from "../../mockApi/mockApi";

const News = () => {
    return (
        <div className="news">
            <div className="container">
                <div className="news-wrapper">
                    <div className="row g-2">
                        {
                            news.map((item,id) => (
                                <div key={id} className="col-lg-4">
                                    <div className="news-body">
                                        <div className="news-box-w">
                                            <div className="news-box">
                                                <div className="news-text">
                                                    <div className="n-header">
                                                        {item.header}
                                                    </div>
                                                    <div className="n-content">
                                                        {item.content}
                                                    </div>
                                                    <div className="n-date">
                                                        {item.date}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="news-btn">
                        <a href="">Bütün xəbərlər</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News