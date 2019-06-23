import React from 'react'

class GifItem extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             spans: 0
        }
        this.gifRef = React.createRef();
    }

    componentDidMount() {
        this.gifRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = ()=>{
        const gifHeight = this.gifRef.current.clientHeight;
        const spans = Math.ceil(gifHeight/9.5);

        this.setState({spans: spans})
    }
    
    gifClicked= (e)=>{
        e.preventDefault();
        this.props.onGifClick(this.props.gif);
    }
    
    render() {
        const src = this.props.gif.images.preview_gif.url,
             alt = this.props.gif.title;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img onClick={this.gifClicked} ref={this.gifRef} src={src} alt={alt}/>
            </div>
        )
    }
}

export default GifItem;