import React, { Component } from 'react';

import './style.css';

import { Header } from '../../components/header';
import { loadNews } from '../../functions/loadNews';
import { Articles } from '../../components/articles';


class App extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    loadNews().then((article) => {
      this.setState({articles: article})
    })
  }
  
  render() {
    const { articles } = this.state;

    return (
      <div className='App'>
        <Header/>
        <section className='container-articles'>
          <Articles articles={articles}/> 
        </section>
      </div>
    );
  }
}

export default App;
