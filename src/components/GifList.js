import React from 'react'

import '../styles/GifList.css'

import GifItem from './GifItem'


class GifList extends React.Component {
    
    render() {
        const gifItems = this.props.gifs.map((gif)=>{
            return <GifItem key={gif.id} gif={gif} onGifClick={this.props.onGifClick}/>
        });

        return (
            <div className='gif-list'>
                {gifItems}
            </div>
        )
    }
}

export default GifList;