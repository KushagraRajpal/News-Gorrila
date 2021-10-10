import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imgUrl, newsUrl } = this.props
        return (
            <div className="my-3">
                <div className="card" style={{ width: "18rem", margin: "auto" }}>

                    <img src={!imgUrl ? "https://source.unsplash.com/286x169/?nature,water"
                        : imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body ">
                        <h5 className="card-title ">{title}</h5>
                        <p className="card-text ">{description}</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
