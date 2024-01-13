import React, { Component } from 'react';
import './style.css';
import { Header } from '../../components/header';
import { loadNews } from '../../functions/loadNews';
import { Articles } from '../../components/articles';
import { ButtonLoadMore } from '../../components/buttonLoadMore';
import { LoadMoreNews } from "../../functions/loadMoreNews";
import { Footer } from "../../components/footer";

class App extends Component {
  state = {
    articles: [],
    allNews: [],
    initialNew: 0,
    newPerPage: 6,
    searchValue: ''
  };

  componentDidMount() {
    loadNews().then((article) => {
      this.setState({ allNews: article });
      const { articles, allNews, initialNew, newPerPage } = this.state;
      this.setState(LoadMoreNews(articles, allNews, initialNew, newPerPage));
    });
  }

  handleChange = (search) => {
    const { value } = search.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { articles, allNews, initialNew, newPerPage, searchValue } = this.state;
    const noMoreNews = newPerPage >= allNews.length;

    // eslint-disable-next-line no-unused-vars
    const filteredArticles = !!searchValue 
    ? allNews.filter(article => {
      const titleMatch = article.title && article.title.toLowerCase().includes(searchValue.toLowerCase());
      const authorMatch = article.author && article.author.toLowerCase().includes(searchValue.toLowerCase());

      return titleMatch || authorMatch;
    })
  : articles;

    return (
      <div className='App'>

        <Header searchValue={searchValue} handleChange={this.handleChange} />
        <section className='container-articles'>
          <Articles articles={filteredArticles} />
        </section>
        {!searchValue &&
        <ButtonLoadMore
          disabled={noMoreNews}
          onClick={() => this.setState(LoadMoreNews(articles, allNews, initialNew, newPerPage))}
        />}
        <Footer/>
      </div>
    );
  }
}

export default App;
