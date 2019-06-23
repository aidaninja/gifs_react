import React from 'react';

import giphy from '../api/Giphy'

import SearchBar from './SearchBar'
import GifList from './GifList'
import GifModal from './GifModal'

class App extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             gifs: [],
             clickedGif: {},
             modal: false
        }
    }
    
    onSearch = async (term)=>{

        const response = await giphy.get('/v1/gifs/search',{
            params: {
                    q: term,
                    api_key: 'RuaU94IPSaeQdsywIN3uUSatfUQmaMK9',
                    limit: 15
                }
        });

        this.setState({gifs: response.data.data});
    }

    onGifClicked= (gif)=>{
        this.setState({clickedGif: gif,modal: true})
    }

    modalOff= ()=>{
        this.setState({modal: false});
    }

    render() {
        return (
            <>
                <div className="ui container">
                    GGIFs
                    <SearchBar onSearch={this.onSearch} />
                    <GifList onGifClick={this.onGifClicked} gifs={this.state.gifs} />
                </div>
                <GifModal gif={this.state.clickedGif} modalOff={this.modalOff} modalState={this.state.modal} />
            </>
        )
    }
}

export default App;