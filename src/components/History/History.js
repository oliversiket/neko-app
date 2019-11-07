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
            <footer>
                <h2>Your recently viewed fluffy friends</h2>
                <ul>
                    { history === undefined ? null :  history.map((item, index) =>{
                        return (<li key={ index }>
                                    <Link to='/facts'>
                                        <button onClick={() => { this.handleClick(item.id, item.name) }}> {item.name} </button>
                                    </Link>
                                </li>)
                        })
                    }
                </ul>
            </footer>
        )
    }
}

export default History