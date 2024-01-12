import React, { Component } from 'react';

import './style.css';

import { Header } from '../../components/header';
import { loadNews } from '../../functions/loadNews';
import { Articles } from '../../components/articles';
import { ButtonLoadMore } from '../../components/buttonLoadMore';
import { LoadMoreNews } from "../../functions/loadMoreNews";


class App extends Component {
  state = {
    articles: [],
    allNews: [],
    initialNew: 0,
    newPerPage: 6
  };

  componentDidMount() {
    loadNews().then((article) => {
      this.setState({allNews: article})
      const {articles, allNews, initialNew, newPerPage} = this.state
      this.setState(LoadMoreNews(articles, allNews, initialNew, newPerPage))
    })
  }

  render() {
    const { articles, allNews, initialNew, newPerPage} = this.state;
    const noMoreNews = newPerPage >= allNews.length

    return (
      <div className='App'>
        <Header/>
        <section className='container-articles'>
          <Articles articles={articles}/> 
        </section>
        <ButtonLoadMore disabled={noMoreNews} onClick={() => this.setState(LoadMoreNews(articles, allNews, initialNew, newPerPage))}/>
      </div>
    );
  }
}

export default App;
