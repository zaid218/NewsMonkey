import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=729c14abf4d5495bbf0c14f77ce5ef50&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults:parsedData.totalResults})
    }
    handlePrevClick = async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=729c14abf4d5495bbf0c14f77ce5ef50&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
        
    }
    handleNextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)))
        {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=729c14abf4d5495bbf0c14f77ce5ef50&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true})
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading:false
            })
        } 
        
        
    }
    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center'>NewsMonkey - Top Headlines</h1>
                {this.state.loading &&this.state.loading&&<Spinner/>}
                <div className="row ">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description :""} imageUrl={element.urlToImage}
                                newsUrl={element.url} />
                        </div>
                    })}

                </div>
                <div className="container-fluid d-flex justify-content-between" >
                    <button disabled={this.state.page <= 1} type="button " onClick={this.handlePrevClick} className="btn btn-dark ">&laquo; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize) } type="button" onClick={this.handleNextClick} className="btn btn-dark  ">Next &raquo;</button>
                </div>
            </div>
        )
    }
}

export default News
