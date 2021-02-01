import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
    state = {
        images: [],
        isLoading: ""
    };

    onSearchSubmit = async term => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        })

        this.setState({
            images: response.data.results,
            isLoading: "No images found."
        })
    }

    renderContent() {
        if (this.state.images.length) {
            return <ImageList images={this.state.images} />
        } else return this.state.isLoading;
    }

    render() {
        return <div className="ui container" style={{ marginTop: "20px" }}><SearchBar onSubmit={this.onSearchSubmit} />{this.renderContent()}</div>
    }
}

export default App;