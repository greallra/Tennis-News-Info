import React from 'react'
import './Articles.css'
import { formatTime } from './ArticleInView'


export default function Articles(props) {
    
    if(props.loading) {
        return <div style={{textAlign: 'center'}}>loading...</div>
    }
    if(props.articles.length === 0) {
        return<div>No articles</div>
    }
    if(props.timePassed > 5 && props.articles.length === 0) {
        return <div>Something went wrong</div>
    }
    return (
        <div className="articles-cont">
            <div className="grid-cont1">
                <div className="grid1-child1">
                    <img src={props.articles[0].img} />
                </div>
                <div className="grid1-child2">
                    <p className="timestamp">{formatTime(props.articles[0].pub)}</p>
                    <h2 className="caption">{props.articles[0].cap}</h2>
                    <p className="author">{props.articles[0].aut}</p>
                  
                </div>     
            </div>
            <div className="cont">
            {props.articles.map((article, i)=>{
                if(i === 0) {return ''}
                return <div className="grid-cont2" id={article.id} onClick={()=>{props.handleViewArticle(article)}} key={article.id}>
                    <div className="grid2child1">
                        <img src={article.img} />
                    </div>
                    <div className="grid2child2"> 
                        <p className="timestamp">{formatTime(article.pub)}</p>
                        <h2 className="caption">{article.cap}</h2>
                        <p className="author">{article.aut}</p>
                    </div>
                </div>
            })}
            </div>
            
            
        </div>
    )
}