import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import PropTypes from 'prop-types'



export class News extends Component {
static defaultProps = {
  country : 'in',
  pageSize: 5
}
static PropsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number
}
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
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=426d01475ae543cc96b96f46903b6180&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let response = await fetch(url);
      let data = await response.json();
      console.log(data);
      this.setState({ articles: data.articles, totalResult: data.totalResult ,loading: false});
    } catch (error) {
      console.error(error);
    }
  }
  handleNextClick = async () => {
    console.log('next click');
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResult/this.props.pageSize))){
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=426d01475ae543cc96b96f46903b6180&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let response = await fetch(url);
    let data = await response.json();
  
    this.setState({
      page: this.state.page + 1,
      articles: data.articles,
      loading:false
    });
  }
}
  
  handlePrevClick = async () => {
    console.log('prev click');
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=426d01475ae543cc96b96f46903b6180&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  
    this.setState({
      page: this.state.page - 1,
      articles: data.articles,
      loading:false
    });
  }

  render() {
    const { articles } = this.state;

    return (

      <div className="container my-3 mx-3">
        <h2 className="d-flex justify-content-center display-5">TOP HEADINGS</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && articles ? (
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
        <button disable={this.state.page + 1 > Math.ceil(this.state.totalResult/20)} type="button" className="btn btn-dark"onClick={this.handleNextClick}>Next &raquo;</button>
        </div>
      </div>
    );
  }
}

export default News;
