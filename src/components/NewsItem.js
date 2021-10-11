import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imgUrl, newsUrl, author, date, source } = this.props
        return (
            <div className="my-3">
                <div className="card" style={{ width: "18rem", margin: "auto" }}>

                    <img src={!imgUrl ? "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/13590/production/_97584297_breaking_news.png"
                        : imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body ">
                        <h5 className="card-title ">{title}
                            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                                {source}
                            </span>
                        </h5>
                        <p className="card-text ">{description}</p>
                        <p className="card-text"><small className="text-danger">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
