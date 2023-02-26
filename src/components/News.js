import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "The New York Times",
            "title": "After Train Derailment In East Palestine, Lawyers Sign Up Clients in Droves - The New York Times",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiUWh0dHBzOi8vd3d3Lm55dGltZXMuY29tLzIwMjMvMDIvMjQvdXMvZWFzdC1wYWxlc3RpbmUtb2hpby1yZXNpZGVudHMtbGF3c3VpdHMuaHRtbNIBAA?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-02-25T01:57:08Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "CBS Sports",
            "title": "Jalen Ramsey trade rumors: Top landing spots for All-Pro CB with Rams reportedly very likely to move him - CBS Sports",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiiwFodHRwczovL3d3dy5jYnNzcG9ydHMuY29tL25mbC9uZXdzL2phbGVuLXJhbXNleS10cmFkZS1ydW1vcnMtdG9wLWxhbmRpbmctc3BvdHMtZm9yLWFsbC1wcm8tY2Itd2l0aC1yYW1zLXJlcG9ydGVkbHktdmVyeS1saWtlbHktdG8tbW92ZS1oaW0v0gGPAWh0dHBzOi8vd3d3LmNic3Nwb3J0cy5jb20vbmZsL25ld3MvamFsZW4tcmFtc2V5LXRyYWRlLXJ1bW9ycy10b3AtbGFuZGluZy1zcG90cy1mb3ItYWxsLXByby1jYi13aXRoLXJhbXMtcmVwb3J0ZWRseS12ZXJ5LWxpa2VseS10by1tb3ZlLWhpbS9hbXAv?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-02-25T01:51:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "DW (English)",
            "title": "EU agrees new Russia sanctions package on war anniversary - DW (English)",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiWmh0dHBzOi8vd3d3LmR3LmNvbS9lbi9ldS1hZ3JlZXMtbmV3LXJ1c3NpYS1zYW5jdGlvbnMtcGFja2FnZS1vbi13YXItYW5uaXZlcnNhcnkvYS02NDgxMjI0MtIBWmh0dHBzOi8vYW1wLmR3LmNvbS9lbi9ldS1hZ3JlZXMtbmV3LXJ1c3NpYS1zYW5jdGlvbnMtcGFja2FnZS1vbi13YXItYW5uaXZlcnNhcnkvYS02NDgxMjI0Mg?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-02-25T01:11:16Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "The Associated Press - en Español",
            "title": "Feds seek to limit telehealth prescriptions for some drugs - The Associated Press - en Español",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiaGh0dHBzOi8vYXBuZXdzLmNvbS9hcnRpY2xlL3ByZXNjcmlwdGlvbi1kcnVncy1tZWRpY2F0aW9uLW9waW9pZHMtaGVhbHRoLTFmMjMxMzE0MzUzNDFmZDE5MmY0MWY5ZGIwMjcyNTVm0gEA?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-02-25T00:53:10Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "CNN",
            "title": "Alex Murdaugh completes testimony in trial over 2021 killings of his wife and son; court to resume Monday - CNN",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiTmh0dHBzOi8vd3d3LmNubi5jb20vMjAyMy8wMi8yNC91cy9hbGV4LW11cmRhdWdoLW11cmRlci10cmlhbC1mcmlkYXkvaW5kZXguaHRtbNIBUmh0dHBzOi8vYW1wLmNubi5jb20vY25uLzIwMjMvMDIvMjQvdXMvYWxleC1tdXJkYXVnaC1tdXJkZXItdHJpYWwtZnJpZGF5L2luZGV4Lmh0bWw?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-02-25T00:47:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "FOX Sports",
            "title": "Report: Russell Wilson tried to have Pete Carroll, GM John Schneider fired - FOX Sports",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMibmh0dHBzOi8vd3d3LmZveHNwb3J0cy5jb20vc3Rvcmllcy9uZmwvcmVwb3J0LXJ1c3NlbGwtd2lsc29uLXRyaWVkLXRvLWhhdmUtcGV0ZS1jYXJyb2xsLWdtLWpvaG4tc2NobmVpZGVyLWZpcmVk0gFuaHR0cHM6Ly9hbXAuZm94c3BvcnRzLmNvbS9zdG9yaWVzL25mbC9yZXBvcnQtcnVzc2VsbC13aWxzb24tdHJpZWQtdG8taGF2ZS1wZXRlLWNhcnJvbGwtZ20tam9obi1zY2huZWlkZXItZmlyZWQ?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-02-25T00:25:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "The New York Times",
            "title": "California Storm Brings Blizzard Conditions as Snow and Wind Intensify - The New York Times",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiSmh0dHBzOi8vd3d3Lm55dGltZXMuY29tLzIwMjMvMDIvMjQvdXMvd2ludGVyLXN0b3JtLWNhbGlmb3JuaWEtd2VhdGhlci5odG1s0gFOaHR0cHM6Ly93d3cubnl0aW1lcy5jb20vMjAyMy8wMi8yNC91cy93aW50ZXItc3Rvcm0tY2FsaWZvcm5pYS13ZWF0aGVyLmFtcC5odG1s?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-02-25T00:20:38Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "The Washington Post",
            "title": "China considers sending Russia artillery shells, U.S. officials say - The Washington Post",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiW2h0dHBzOi8vd3d3Lndhc2hpbmd0b25wb3N0LmNvbS9uYXRpb25hbC1zZWN1cml0eS8yMDIzLzAyLzI0L2NoaW5hLXJ1c3NpYS1hcnRpbGxlcnktdWtyYWluZS_SAQA?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-02-25T00:16:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "9to5Mac",
            "title": "Exclusive: iPhone 15 Plus renders reveal new design - 9to5Mac",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiR2h0dHBzOi8vOXRvNW1hYy5jb20vMjAyMy8wMi8yNC9pcGhvbmUtMTUtcGx1cy1kZXNpZ24tYmV6ZWxzLWN1cnZlLW1vcmUv0gEA?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-02-25T00:08:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Deadline",
            "title": "‘Quantumania’ Warps To $30M, ‘Cocaine Bear’ High On $20M & ‘Jesus Revolution’ Praises $13M+ – Friday Midday Box Office - Deadline",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiZmh0dHBzOi8vZGVhZGxpbmUuY29tLzIwMjMvMDIvYm94LW9mZmljZS1jb2NhaW5lLWJlYXItamVzdXMtcmV2b2x1dGlvbi1hbnQtbWFuLWFuZC10aGUtd2FzcC0xMjM1MjY5ODc3L9IBamh0dHBzOi8vZGVhZGxpbmUuY29tLzIwMjMvMDIvYm94LW9mZmljZS1jb2NhaW5lLWJlYXItamVzdXMtcmV2b2x1dGlvbi1hbnQtbWFuLWFuZC10aGUtd2FzcC0xMjM1MjY5ODc3L2FtcC8?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-02-24T23:56:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Reuters",
            "title": "Gerber ends Tesla board run, says carmarker creating 'own voice' - Reuters",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMif2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL2J1c2luZXNzL2F1dG9zLXRyYW5zcG9ydGF0aW9uL2dlcmJlci1lbmRzLXRlc2xhLWJvYXJkLXJ1bi1zYXlzLWNhcm1hcmtlci1jcmVhdGluZy1vd24tdm9pY2UtMjAyMy0wMi0yNC_SAQA?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-02-24T23:48:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Reuters",
            "title": "Meta heats up Big Tech's AI arms race with new language model - Reuters",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiUmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvbWV0YS1sYXVuY2gtYWktbGFuZ3VhZ2UtbW9kZWwtbGxhbWEtMjAyMy0wMi0yNC_SAQA?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-02-24T23:43:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "The Guardian",
            "title": "US attempts to win over UN members who are neutral on war in Ukraine - The Guardian",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMicmh0dHBzOi8vd3d3LnRoZWd1YXJkaWFuLmNvbS93b3JsZC8yMDIzL2ZlYi8yNC91cy1hdHRlbXB0cy10by13aW4tb3Zlci11bi1tZW1iZXJzLXdoby1hcmUtbmV1dHJhbC1vbi13YXItaW4tdWtyYWluZdIBAA?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-02-24T22:55:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "ABC News",
            "title": "Biden 'ruling out' for now sending F-16s to Ukraine, he tells ABC's David Muir - ABC News",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiYmh0dHBzOi8vYWJjbmV3cy5nby5jb20vUG9saXRpY3MvYmlkZW4tcnVsaW5nLW5vdy11a3JhaW5lcy1yZXF1ZXN0LTE2cy10ZWxscy1hYmNzL3N0b3J5P2lkPTk3NDQ3NjQw0gFmaHR0cHM6Ly9hYmNuZXdzLmdvLmNvbS9hbXAvUG9saXRpY3MvYmlkZW4tcnVsaW5nLW5vdy11a3JhaW5lcy1yZXF1ZXN0LTE2cy10ZWxscy1hYmNzL3N0b3J5P2lkPTk3NDQ3NjQw?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-02-24T22:52:56Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "CNBC",
            "title": "Warner Bros. Discovery sues Paramount over 'South Park' streaming rights - CNBC",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiamh0dHBzOi8vd3d3LmNuYmMuY29tLzIwMjMvMDIvMjQvd2FybmVyLWJyb3MtZGlzY292ZXJ5LXN1ZXMtcGFyYW1vdW50LW92ZXItc291dGgtcGFyay1zdHJlYW1pbmctcmlnaHRzLmh0bWzSAW5odHRwczovL3d3dy5jbmJjLmNvbS9hbXAvMjAyMy8wMi8yNC93YXJuZXItYnJvcy1kaXNjb3Zlcnktc3Vlcy1wYXJhbW91bnQtb3Zlci1zb3V0aC1wYXJrLXN0cmVhbWluZy1yaWdodHMuaHRtbA?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-02-24T22:42:23Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Lifehacker",
            "title": "You Can Save Your ChatGPT Conversations for Later - Lifehacker",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiU2h0dHBzOi8vbGlmZWhhY2tlci5jb20veW91LWNhbi1zYXZlLXlvdXItY2hhdGdwdC1jb252ZXJzYXRpb25zLWZvci1sYXRlci0xODUwMTU3NTU50gEA?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-02-24T22:30:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Yahoo Sports",
            "title": "Alabama allowing Brandon Miller to continue to play is now the story of the college basketball season - Yahoo Sports",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMijQFodHRwczovL3Nwb3J0cy55YWhvby5jb20vYWxhYmFtYS1hbGxvd2luZy1icmFuZG9uLW1pbGxlci10by1jb250aW51ZS10by1wbGF5LWlzLW5vdy10aGUtc3Rvcnktb2YtdGhlLWNvbGxlZ2UtYmFza2V0YmFsbC1zZWFzb24tMjIyODQzNTU0Lmh0bWzSAZUBaHR0cHM6Ly9zcG9ydHMueWFob28uY29tL2FtcGh0bWwvYWxhYmFtYS1hbGxvd2luZy1icmFuZG9uLW1pbGxlci10by1jb250aW51ZS10by1wbGF5LWlzLW5vdy10aGUtc3Rvcnktb2YtdGhlLWNvbGxlZ2UtYmFza2V0YmFsbC1zZWFzb24tMjIyODQzNTU0Lmh0bWw?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-02-24T22:28:43Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "The Washington Post",
            "title": "Report: George Santos lied to a judge about working for Goldman Sachs - The Washington Post",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiYmh0dHBzOi8vd3d3Lndhc2hpbmd0b25wb3N0LmNvbS9wb2xpdGljcy8yMDIzLzAyLzI0L2dlb3JnZS1zYW50b3MtbGllcy1zZWF0dGxlLWp1ZGdlLWdvbGRtYW4tc2FjaHMv0gEA?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-02-24T21:51:01Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "ESPN",
            "title": "Matt Nagy gets second stint as Chiefs' offensive coordinator - ESPN",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiZWh0dHBzOi8vd3d3LmVzcG4uY29tL25mbC9zdG9yeS9fL2lkLzM1NzI4MDc4L21hdHQtbmFneS1nZXRzLXNlY29uZC1zdGludC1jaGllZnMtb2ZmZW5zaXZlLWNvb3JkaW5hdG9y0gFyaHR0cHM6Ly93d3cuZXNwbi5jb20vbmZsL3N0b3J5L18vaWQvMzU3MjgwNzgvbWF0dC1uYWd5LWdldHMtc2Vjb25kLXN0aW50LWNoaWVmcy1vZmZlbnNpdmUtY29vcmRpbmF0b3I_cGxhdGZvcm09YW1w?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-02-24T21:32:24Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "The New York Times",
            "title": "Human Bird Flu Cases Investigated in Cambodia - The New York Times",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiPGh0dHBzOi8vd3d3Lm55dGltZXMuY29tL2V4cGxhaW4vMjAyMy9iaXJkLWZsdS1jYW1ib2RpYS1kZWF0aNIBAA?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-02-24T21:31:08Z",
            "content": null
        }
    ]
    constructor() {
        super();
        console.log("hi this is constructor")
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>NewsMonkey - Top Headlines</h2>
                <div className="row ">
                    <div className="col-md-4">
                        <NewsItem title="Ukraine war: The real reason for China's charm offensive over Ukraine and Russia" description="The West may come away unimpressed - but convincing them was never likely the main goal for Beijing." imageUrl="https://ichef.bbci.co.uk/news/1024/branded_news/149EF/production/_128736448_06b3a75cee41e9738153dd22e68623b1646fe13d0_368_4368_24574368x2457.jpg"newsUrl="todo"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem />
                    </div>
                    <div className="col-md-4">
                        <NewsItem />
                    </div>
                   </div>
            </div>
        )
    }
}

export default News