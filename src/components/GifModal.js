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
                <div onClick={this.onModalExit} className="gif-modal-bg"></div>
                <div className="gif-modal">
                    <img src={this.props.gif.images.downsized.url} alt={this.props.gif.title} />
                </div>
            </div>
        )
    }
}

export default GifModal;