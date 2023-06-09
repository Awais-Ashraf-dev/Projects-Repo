import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    // ... article data ...
  ];

  constructor() {
    super();
    this.state = {
      articles: null,
      loading: false,
      page : 1
    };
  }

  async componentDidMount() {
    try {
      let url =
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=426d01475ae543cc96b96f46903b6180&page=1&pageSize=20";
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
      this.setState({ articles: data.articles, totalResult: data.totalResult });
    } catch (error) {
      console.error(error);
    }
  }
  handleNextClick = async () => {
    if(this.state.page + 1 > Math.ceil(this.state.totalResult/20)){

    }
    else{
    console.log('next click');
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=426d01475ae543cc96b96f46903b6180&page=${this.state.page + 1}&pageSize=20`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  
    this.setState({
      page: this.state.page + 1,
      articles: data.articles
    });
  }
  }
  
  handlePrevClick = async () => {
    console.log('prev click');
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=426d01475ae543cc96b96f46903b6180&page=${this.state.page - 1}&pageSize=20`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  
    this.setState({
      page: this.state.page - 1,
      articles: data.articles
    });
  }

  render() {
    const { articles } = this.state;

    return (
      <div className="container my-3 mx-3">
        <h2>TOP HEADINGS</h2>
        <div className="row">
          {articles ? (
            articles.slice(0, 15).map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 88) : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <div className="container d-flex justify-content-between my-2 ">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &laquo;Previous</button>
        <button type="button" className="btn btn-dark"onClick={this.handleNextClick}>Next &raquo;</button>
        </div>
      </div>
    );
  }
}

export default News;
