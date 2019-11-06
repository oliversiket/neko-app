import React, { Component } from "react";

class History extends Component {

    render() {
        let { history } = this.props;
        
        return (
            <footer>
                <h2>Your recently viewed fluffy friends</h2>
                <ul>
                    { history === undefined ? null :  history.map((item, index) =>{
                        return (<li key={ index }>
                                    <p>{item.id}</p>
                                    <p>{item.name}</p>
                                </li>)
                        })
                    }
                </ul>
            </footer>
        )
    }
}

export default History