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
    // TODO error handling
    // TODO indentation check
    componentDidMount(){
        let { chosenBreedID } = this.props;

        axios.get(`images/search?breed_id=${chosenBreedID}`).then(({ data }) => {
            if(data[0].breeds.length === 0){
                this.setState({
                    loaded: true,
                    error: true,
                });
            }else{
                console.log(data)
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
        let { facts, loaded, img, error } = this.state;
        let { handleReset } = this.props;
        
        return !loaded ? <Loading/> : ( 
            <main className="facts-wrapper container">
                <div className="nav">
                    <Link to="/">
                        <i className="fas fa-chevron-left fa-2x nav-icon nav-back"></i>
                    </Link>
                    <i className="far fa-heart fa-2x nav-icon nav-fav"></i>
                    <Link to="/">
                        <i onClick={ handleReset } className="fas fa-power-off fa-2x nav-icon nav-off"></i>
                    </Link>
                </div>
                
            { error ? <p className="text-center">Something went wrong please try to refresh the page or initiate a new search.</p> :
                <div className="row">
                    <div className="col-sm-12 col-lg-6 block-one-wrapper">
                        <ul className="list-group list-block-one" >
                        { facts.map((item, index) => {
                            return (
                                <li key={index}> 
                                    <img className="cat-image" src={img} alt="cat"></img>
                                    <p><span className="text-dec">Breed:</span> {item.name}</p>
                                    <p><span className="text-dec">Origin:</span> {item.origin}</p>
                                    <p className="description"><span className="text-dec">Description:</span> {item.description}</p>
                                    
                                </li>
                            )}) }
                        </ul>
                    </div>
                    <div className="col-sm-12 col-lg-6 block-two-wrapper">
                        <ul className="list-group list-block-two">
                        { facts.map((item, index) => {
                            return (
                                <li key={index}>
                                    <h4>Lifespan and health:</h4>
                                        <ul>
                                            <span>Life exptectancy: { item.life_span } years</span>
                                            <Rating name={ "Health Issues" } n={ item.health_issues }/>
                                        </ul>
                                    <h4>Behavior:</h4>
                                        <ul>
                                            <Rating name={ "Adaptability" } n={ item.adaptability }/>
                                            <Rating name={ "Stranger Friendly" } n={ item.stranger_friendly }/>
                                            <Rating name={ "Child Friendly" } n={ item.child_friendly }/>
                                            <Rating name={ "Dog Friendly" } n={ item.dog_friendly }/>
                                            <Rating name={ "Social Needs" } n={ item.social_needs }/>
                                            <Rating name={ "Affection Level" } n={ item.affection_level }/>
                                        </ul>
                                    <h4>Other:</h4>
                                        <ul>
                                            <Rating name={ "Energy level" } n={ item.energy_level }/>
                                            <Rating name={ "Intelligence" } n={ item.intelligence }/>
                                        </ul>
                                    <p className="link-wrap"><a className="more-link" href={item.wikipedia_url}target="_blank" rel="noopener noreferrer">I want to know more!</a></p>
                                </li>
                            )} )}
                        </ul>
                    </div>
                </div>
            }
            </main>
        );
    }

}
export default Facts