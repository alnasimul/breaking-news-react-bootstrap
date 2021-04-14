import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles,setArticles] = useState([]);
    useEffect(() => {
        const url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=bafe0adad4714346881cd6730410d3af";
        fetch(url)
        .then(res => res.json())
        .then(data => setArticles(data.articles))
       // console.log(articles);
    },[])
    console.log(articles);
    return (
        <div>
           <h1>Top Headlines: {articles.length} </h1> 
            {    
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;