import React from 'react';
import faker from 'faker';

import giphy from '../api/Giphy'

import '../styles/App.css'

import SearchBar from './SearchBar'
import GifList from './GifList'
import GifModal from './GifModal'

class App extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            currentTerm:'',
             gifs: [],
             clickedGif: {},
             modal: false
        }
    }

    componentDidMount(){
        const initialSearchTerm = faker.random.word();
        this.onSearch(initialSearchTerm);
    }
    
    onSearch = async (term)=>{

        const response = await giphy.get('/v1/gifs/search',{
            params: {
                    q: term,
                    api_key: 'RuaU94IPSaeQdsywIN3uUSatfUQmaMK9',
                    limit: 15
                }
        });

        this.setState({currentTerm: term, gifs: response.data.data});
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
                <div className="ui container ">
                    <h1 className="ui header"><span role="img" aria-label="fire">🔥</span>GIFs<span role="img" aria-label="fire">🔥</span></h1>
                    <SearchBar currentTerm={this.state.currentTerm} onSearch={this.onSearch} />
                    <GifList onGifClick={this.onGifClicked} gifs={this.state.gifs} />
                </div>
                <GifModal gif={this.state.clickedGif} modalOff={this.modalOff} modalState={this.state.modal} />
            </>
        )
    }
}

export default App;