import React, { Component } from "react";

class Rating extends Component {
     
    render() {
        let { name, n } = this.props;
        let row = []

        for (let i = 0; i < n; i++) {
            row.push(<span key={i} alt="star">&#11088;</span>)  
        }   

        return <div>{name}: {row}</div>; 
    }
};

export default Rating;