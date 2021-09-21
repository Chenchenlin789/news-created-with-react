import React, { Component } from 'react';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-21&sortBy=publishedAt&apiKey=84923e7678b147c0b7db91aeb22df1f0'
        )
            .then(response => response.json())
            .then(json => this.setState({ data: json.articles }))
    }
    render() {
        console.log(this.state.data)
        return (
            <section>
                < div >
                    {
                        this.state.data.map(elt => <div>
                            <h2>{elt.title}</h2>
                            <p>{elt.content}</p>
                            {/* <p>{elt.description}</p> */}
                            {/* <img src="urlToImage">{elt.urlToImage}</img> */}
                        </div>

                        )
                    }

                </div >
            </section >
        );
    }
}


export default News;
