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
            img: "",
            error: false,
            loaded: false,
        }
    }
    componentDidMount(){
        let { chosenBreedID } = this.props;

        axios.get(`images/search?breed_id=${chosenBreedID}`).then(({ data }) => {
            if(data.length === 0){
                this.setState({
                    error: true,
                });
            }else{
                this.setState({
                    loaded: true,
                    facts: data[0].breeds,
                    img: data[0].url
                })
            };
        }).catch(error => {
            console.log(error);
          });
    }
    render() {
        let { facts, loaded, img } = this.state;
        return (
            <main>
                <h3>Some facts about your beloved creature</h3>
                <ul className="list-group" >
                    { !loaded ? <Loading/> : ( facts.map((item, index) => {
                        return (
                            <li key={index}> 
                                <img className="cat-image" src={img}></img>
                                <h3>Breed: {item.name}</h3>
                                <p>Origin: {item.origin}</p>
                                <p>Description: {item.description}</p>
                                <Rating name={ "Adaptability" } n={ item.adaptability }/>
                                <Rating name={ "Energy level" } n={ item.energy_level }/>
                                <Rating name={ "Intelligence" } n={ item.intelligence }/>
                                <Rating name={ "Stranger Friendly" } n={ item.stranger_friendly }/>
                                <a href={item.wikipedia_url}target="_blank" rel="noopener noreferrer">Wanna know more ?</a>
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