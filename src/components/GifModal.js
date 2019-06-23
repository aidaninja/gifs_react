import React from 'react'

import '../styles/GifModal.css'

class GifModal extends React.Component{
    onModalExit = (e)=>{
        e.preventDefault();
        this.props.modalOff();
    }
    render() {
        if(!this.props.modalState){
            return <></>;
        }
        return (
            <div>
                <p onClick={this.onModalExit}>close</p>
                <div onClick={this.onModalExit} className="gif-modal">
                    <img src={this.props.gif.images.preview_gif.url} alt={this.props.gif.title} />
                </div>
            </div>
        )
    }
}

export default GifModal;