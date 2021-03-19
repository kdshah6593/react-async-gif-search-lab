import React from 'react';

class GifSearch extends React.Component {
    state = {
        searchTerm: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.fetchGifs(this.state.searchTerm)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="searchTerm">Enter a Search Term:</label> 
                <input type="text" id="searchTerm" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange} />

                <input type="submit" value="Find Gifs" />
            </form>
        )
    }
}

export default GifSearch;