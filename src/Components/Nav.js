import React from 'react'
import ball from '../ball.png'
const navCont = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'lightgreen',
    color: '#fff',
    minHeight: '40px',
    fontSize: '19px'
}
const navItem = {
  padding: '20px',
  boxSizing: 'border-box'
}

const activeNavStyle = {...navItem, background: '', color: 'green', textDecoration: 'underline'}

export default function Nav(props) {
    return (
        <div style={navCont} className="navCont">
            <div><img src={ball} alt="" style={{width: '26px', marginRight: '10px'}}/></div>
            <div style={props.activePage === 'News' ? activeNavStyle: navItem} onClick={props.handleNavEvent}>News</div>
            <div style={props.activePage === 'Tournaments' ? activeNavStyle: navItem} onClick={props.handleNavEvent}>Tournaments</div>
        </div>
    )
}