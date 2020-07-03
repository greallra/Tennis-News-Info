import React from 'react';
import { fetchTournaments } from '../fetches';
import Loader from 'react-loader-spinner';

let cont = {
    border: '1px solid #ccc',
    boxShadow: '2px 2px 6px 0px rgba(187, 163, 206, 1)',
    backgroundColor: '#fff',
    padding: '2%',
    borderRadius: '20px'
}
let innerCont = {
    border: '1px solid #ccc',
    boxShadow: '2px 2px 6px 0px rgba(187, 163, 206, 1)',
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: '20px',
    color: '#fff',
    padding: '4px',
}

export default class Tournaments extends React.Component {
    state = {
        error: false,
        errorMsg: "",
        loading: false,
        competitions: [],
        dropdownOpen: false,
        dropdownId : null
    }
    componentDidUpdate() {
        if(this.state.counter < 2) {

        }   
    }
    componentDidMount() {
        this.setState({loading: true})
    
        fetchTournaments()
        .then((r)=>{
            if(r.status !== 200) {
                return this.setState({error: true, errorMsg: "fetch err"})
            }
            return r.json();
        })
        .then(r =>this.setState({competitions: r.Ccg, loading: false}))
    }
    toggleDropdown =(i)=>{
        if(!this.state.dropdownOpen) {
            this.setState({dropdownOpen : true, dropdownId : i})
        } else {
            this.setState({dropdownOpen : false, dropdownId : null})
        }
        // this.setState({dropdownOpen: !this.state.dropdownOpen , dropdownId : i})
    }


    render() {
        if(this.state.loading) {
            return  <div style={{textAlign: 'center', padding: '20px'}}><Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
    
         /></div>
        }
        return <div style={{padding: '10px'}}>
            <button className="btn" onClick={this.props.handleBackToArticles}>Back To Articles </button>
            {this.state.competitions.map((o,i)=>{
                return <div style={cont}>
                    <h3 style={{textAlign: 'center'}}>{o.Cnm}</h3>
            <p  className="dropTrigger" style={{textAlign: 'center'}} onClick={()=>{this.toggleDropdown(i)}}>{this.state.dropdownOpen ? '-':'+'}</p>
                    <div className={`dropdown ${i === this.state.dropdownId ?  'open':''}`} >
                       <div className="category"> 
                            <p><span style={{fontWeight: '900'}}>Date:</span> <span>01 Jan 2020</span></p>
                            <h4>Categories</h4>
                       </div>
                       <div className="items">
                            {o.Stages.map((o,i)=>{
                                return <div style={innerCont} >{o.Sdn}</div>
                            })}
                        </div>
                    </div>
                </div>
            })}
            
            <button color="danger">Danger!</button>
        </div>
    }

   
}