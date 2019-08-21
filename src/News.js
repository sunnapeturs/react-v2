import React from 'react';

const News = (props)=>{
    return (
        <div>
            <h3 className="headline">{props.news.title}</h3>
            <img src = {props.news.photo}></img>
        </div>
    )
}
export default News;