import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "../../axios"
import Loading from "../Loading/Loading";
import Rating from "../Rating/Rating";

class Facts extends Component {
    constructor(props){
        super(props)

        this.state = {
            facts: [],
            loaded: false,
        }
    }
    componentDidMount(){
        let { chosenBreedID } = this.props;

        axios.get(`breeds/search?q=${chosenBreedID}`).then(({ data }) => {
            this.setState({
                loaded: true,
                facts: data
            });
        });
    }
    render() {
        let { facts, loaded } = this.state;
        return (
            <main>
                <h3>Some facts about your beloved creature</h3>
                <ul className="list-group" >
                    { !loaded ? <Loading/> : ( facts.map((item, index) => {
                        return (
                            <li key={index}> 
                                <h3>Breed: {item.name}</h3>
                                <p>Origin: {item.origin}</p>
                                <p>Description: {item.description}</p>
                                <Rating name={ "Adaptability" } n={ item.adaptability }/>
                                <Rating name={ "Energy level" } n={ item.energy_level }/>
                            </li>
                        )

                    }) )}
                </ul>
                <Link to="/">
                    <button>Take me back to the search page</button>
                </Link>
            </main>
        )
    }

}
export default Facts