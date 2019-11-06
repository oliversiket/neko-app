import React, { Component } from "react";

class History extends Component {

    render() {
        let { history } = this.props;
        
        return (
            <footer>
                <h2>Your recently viewed fluffy friends</h2>
                <ul>
                    { history === undefined ? null :  history.map((item, index) =>{
                        return (<li key={ index }> { item }</li>)
                        })
                    }
                </ul>
            </footer>
        )
    }
}

export default History