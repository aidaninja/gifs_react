import React from 'react'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             term: ''
        }
    }
    
    onSearch = (e)=>{
        e.preventDefault();
        this.props.onSearch(this.state.term);
    }

    onUserInput=(e)=>{
        this.setState({term: e.target.value})
    }
    
    render() {
        return (
            <div className="ui form">
                <form onSubmit={this.onSearch} className="field">
                    <label>Search GIF</label>
                    <input defaultValue={this.state.term} onChange={this.onUserInput} type="text"/>
                </form>
            </div>
        )
    }
}

export default SearchBar;