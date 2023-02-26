import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        console.log("hi this is constructor")
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/everything?q=health&apiKey=729c14abf4d5495bbf0c14f77ce5ef50";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles:parsedData.articles})
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>NewsMonkey - Top Headlines</h2>
                <div className="row ">
                    {this.state.articles.map((element) => {
                        if (element.urlToImage && (element.urlToImage.endsWith('.jpg') || element.urlToImage.endsWith('.png'))) {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element ? element.title.slice(0, 45) : ""} description={element ? element.description.slice(0, 70) :""} imageUrl={element?element.urlToImage:""}
                                newsUrl={element.url} />
                            </div>
                        }
                        return null
                    })}

                </div>
                <div className="container-fluid d-flex justify-content-between" >
                    <button type="button " class="btn btn-dark ">PREV</button>
                    <button type="button" class="btn btn-dark  ">NEXT</button>
                </div>
            </div>
        )
    }
}

export default News
