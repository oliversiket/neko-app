import React, { Component } from "react";
import { Link } from 'react-router-dom';

class History extends Component {
    constructor(props){
        super(props)

        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(id,name){
        let { handleBreed } = this.props;
        
        handleBreed(id,name)
    }

    render() {
        let { history } = this.props;
        
        return (
            <div className="history-wrapper">
                <h2 className="history-title">Recently viewed fluffy friends</h2>
                <ul className="history-list">
                    { history.length === 0 ? <p>Your history is empty <span role="img" aria-label="cat-face">😿</span></p> :  history.map((item, index) =>{
                        
                        return (<li key={ index }>
                                    <Link to='/facts'>
                                        <button onClick={() => { this.handleClick(item.id, item.name) }}> {item.name} </button>
                                    </Link>
                                </li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default History