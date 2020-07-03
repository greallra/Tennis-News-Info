import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Articles from './Components/Articles';
import {ArticleInView} from './Components/ArticleInView';
import {fetchArticles, data} from './fetches';
import Tournaments from './Components/Tournaments';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
console.log(process.env.REACT_APP_KEY)

class App extends React.Component {
  state = {
    activePage: 'News',
    timePassed : 0,
    loading: false,
    error: false,
    errorMsg: "",
    articles: [],
    articleViewModeOn: false,
    width: 0,
    articleInView : undefined

  }

  handleNavEvent = (e)=>{

    this.setState({
      activePage: e.target.innerHTML
    })
  }
  handleViewArticle = (article)=>{
    this.setState({articleViewModeOn: true, articleInView: article})
  }
  handleBackToArticles = param => this.setState({articleViewModeOn :false, articleInView: undefined,activePage: 'News'})

  componentDidMount() {
    this.setState({loading: true})

    //fetch articles
    fetchArticles()
    .then(r=>r.json())
    // data()
    .then(r=>{
      this.setState({ articles: r.arts, loading: false})
    })
    .catch(e=>{
      console.log(e);
      this.setState({error: true, errorMsg: "problem getting articles", loading: false})
    })
    this.setState({width: window.innerWidth})
    window.addEventListener('resize',()=>{
      this.setState({width: window.innerWidth})
    })
  }
  render() {
    const {timePassed, loading, articles, activePage, articleInView, articleViewModeOn, width} = this.state
    return (
      <div className="App">
        <Nav activePage={this.state.activePage} handleNavEvent={this.handleNavEvent}/>
        {activePage === 'News' &&  !articleViewModeOn ? <Articles timePassed={timePassed} loading={loading} articles={articles} handleViewArticle={this.handleViewArticle}/>: ''}
        {articleViewModeOn ? <ArticleInView articleInView={articleInView} width={width} handleBackToArticles={this.handleBackToArticles}/>:<div></div>}
        {activePage === 'Tournaments' ? <Tournaments width={width} handleBackToArticles={this.handleBackToArticles}/>:''}
      </div>
    );
  }
  
}

export default App;
