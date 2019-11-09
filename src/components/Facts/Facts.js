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
        let { handleReset } = this.props;
        
        return !loaded ? <Loading/> : ( 
            <main className="facts-wrapper container">
                <div className="nav">
                    <Link to="/">
                        <i className="fas fa-chevron-left fa-2x nav nav-back"></i>
                    </Link>
                    <i className="far fa-heart fa-2x nav nav-fav"></i>
                    <Link to="/">
                        <i onClick={ handleReset } className="fas fa-power-off fa-2x nav nav-off"></i>
                    </Link>
                </div>
                

                <div className="row">
                    <div className="col-sm-12 col-lg-6 block-one-wrapper">
                        <ul className="list-group list-block-one" >
                        { facts.map((item, index) => {
                            return (
                                <li key={index}> 
                                    <img className="cat-image" src={img}></img>
                                    <p><span className="text-dec">Breed:</span> {item.name}</p>
                                    <p><span className="text-dec">Origin:</span> {item.origin}</p>
                                    <p className="description"><span className="text-dec">Description:</span> {item.description}</p>
                                    <p>Life exptectancy: { item.life_span } years</p>
                                </li>
                            )}) }
                        </ul>
                    </div>
                    <div className="col-sm-12 col-lg-6 block-two-wrapper">
                        <ul className="list-group list-block-two">
                        {facts.map((item, index) => {
                            return (
                                <li key={index}>
                                    <p>Traits on a 1-5 scale:</p>
                                    <Rating name={ "Adaptability" } n={ item.adaptability }/>
                                    <Rating name={ "Energy level" } n={ item.energy_level }/>
                                    <Rating name={ "Intelligence" } n={ item.intelligence }/>
                                    <Rating name={ "Stranger Friendly" } n={ item.stranger_friendly }/>
                                    <Rating name={ "Child Friendly" } n={ item.child_friendly }/>
                                    <a href={item.wikipedia_url}target="_blank" rel="noopener noreferrer">Wanna know more ?</a>
                                </li>
                            )} )}
                        </ul>
                    </div>
                </div>
            </main>
        );
    }

}
export default Facts