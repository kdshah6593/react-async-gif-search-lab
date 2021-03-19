import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
    state = {
        gifs: []
    }
    
    render() {
        return (
            <div>
                <GifSearch fetchGifs={this.fetchGifs}/>
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

    fetchGifs = (query) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`
        fetch(url)
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            this.setState({
                gifs: json.data.slice(0,3)
            })
        })
    }
}

export default GifListContainer