import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles =[
        {
            "source": {
                "id": "abc-news-au",
                "name": "ABC News (AU)"
            },
            "author": "David Mark",
            "title": "2021-22 Ashes series gets provisional approval from England and Wales Cricket Board",
            "description": "The England and Wales Cricket Board gives conditional approval for England to tour Australia for the Ashes series due to begin in December.",
            "url": "http://www.abc.net.au/news/2021-10-09/2021-22-ashes-series-gets-provisional-approval-from-england/100526536",
            "urlToImage": "https://live-production.wcms.abc-cdn.net.au/c162a7e6a6079e7419858bcaa48c36c0?impolicy=wcms_crop_resize&cropH=1680&cropW=2983&xPos=17&yPos=51&width=862&height=485",
            "publishedAt": "2021-10-08T21:55:29Z",
            "content": "The England and Wales Cricket Board has given \"conditional approval\" for the Ashes tour to Australia to go ahead this summer.\r\nKey points:\r\n<ul><li>England is expected to name its touring squad for t… [+4318 chars]"
        },
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": "BBC Sport",
            "title": "ECB gives 'conditional' Ashes approval",
            "description": "England men's Ashes series in Australia this winter will go ahead \"subject to several critical conditions\", says the England and Wales Cricket Board.",
            "url": "http://www.bbc.co.uk/sport/cricket/58788750",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/13590/production/_97584297_breaking_news.png",
            "publishedAt": "2021-10-08T17:07:27.878367Z",
            "content": "England men's Ashes series in Australia this winter will go ahead \"subject to several critical conditions\", says the England and Wales Cricket Board. \r\nEngland had concerns over their families being … [+2042 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }]
    constructor(){
        super()
        console.log("hello i am a constructor from news component")
        this.state= {
        articles: this.articles,
        loding:false
        }
    }
    render() {
        return (
            <div className= "container my-3">
                <h2>NewsGorrila - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                <NewsItem title= "myTitle" description = "my desc" imgUrl= "https://live-production.wcms.abc-cdn.net.au/c162a7e6a6079e7419858bcaa48c36c0?impolicy=wcms_crop_resize&cropH=1680&cropW=2983&xPos=17&yPos=51&width=862&height=485" newsUrl = "todo"/>
                </div>
                    <div className="col-md-4">
                <NewsItem title= "myTitle" description = "my desc"/>
                </div>
                    <div className="col-md-4">
                <NewsItem title= "myTitle" description = "my desc"/>
                </div>
                   
                
                </div>
            </div>
        )
    }
}

export default News
