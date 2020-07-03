import React from 'react';
import moment from 'moment';


const cont = {
    maxWidth: '700px',
    margin: '20px auto'
}
const imgCont = {
   position: 'relative'
}
const imgStyle = {
    width: '100%'
}
const time = {
    position: 'absolute',
    left: 0,
    color: '#fff',
    padding: '5px',
    margin: '20px',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '4%'
}
const h2style = {
    fontSize: '6vw',
    lineHeight: '7.5vw'
}
const h2styleDesk = {
    fontSize: '30px',

}
const innerCont = {
    padding: '15px'
}
const formatTime = (unixDate)=>{
    let str = " ago"
    let now = moment();
    let timeAgoUnix = moment.unix(unixDate).format();   
    let days = now.diff(timeAgoUnix, 'days');
    let hours = now.diff(timeAgoUnix, 'hours');
    if(hours <= 24) {
        return hours + ' hours' + str;
    }
    return days + ' days' + str;
}

function ArticleInView(props) {
    console.log("porps", props)
    const { img, pub, cap, aut, des, con } = props.articleInView;
    return <div style={cont}>
        <div style={imgCont}>
            <img src={img} alt="" style={imgStyle}/>
            <span style={time}>{formatTime(pub)}</span>
        </div>
        <div style={innerCont}>
            <h2 style={props.width > 500 ? h2styleDesk: h2style}>{cap}</h2>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img src="https://picsum.photos/20/20" style={{borderRadius: '50%', padding: '10px'}}/>
                    <img src="https://picsum.photos/20/20" style={{borderRadius: '50%', padding: '10px'}}/>
                    <img src="https://picsum.photos/20/20" style={{borderRadius: '50%', padding: '10px'}}/>
                    <img src="https://picsum.photos/20/20" style={{borderRadius: '50%', padding: '10px'}}/>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img src="https://picsum.photos/40/40" style={{borderRadius: '50%', padding: '10px'}}/>
                    <span >{aut}</span>
                </div>
            </div>
            <hr style={{border: '1px solid green'}}/>
            <h3 style={props.width > 800 ? {fontSize: '20px'}:{fontSize: '3.5vw'}}>{des}</h3>
            <div style={props.width > 800 ? {fontSize: '1.7vw'}:{fontSize: '3vw'}} dangerouslySetInnerHTML={{__html: con}} className="inViewP"></div>
            <button className="btn" onClick={props.handleBackToArticles}>Back To Articles </button>
        </div>
     
    </div>
}

export {ArticleInView, formatTime };