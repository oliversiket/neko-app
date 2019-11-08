import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "../../axios"
import Loading from "../Loading/Loading";
import History from "../History";

class Search extends Component {

    constructor(props){
        super(props);

        this.state = {
            chosenBreedID: "",
            chosenBreedName: "",
            breeds: [],
            loaded: false,
            error: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        let { breeds } = this.state;

            // find the selected user input in the list of breeds
        let id = breeds.find(breed => breed.name === e.currentTarget.value)

        this.setState({
            // if the selected breed exists use its ID and Name to create variables
            chosenBreedID: id === undefined ? "" : id.id,
            chosenBreedName: id === undefined ? "" : id.name,
            error: false,
        })
    }

    handleClick(e) {
        let breedID = this.state.chosenBreedID;
        let breedName = this.state.chosenBreedName;
        let { breeds } = this.state
        let { history, handleBreed, handleHistory } = this.props;
        let checkBreed = () => breeds.map(breed => breed.id).includes(breedID)
        let checkHistory = () => history.map(breed => breed.id).includes(breedID);
        
            // after submit if selected breed exists update state
        if( checkBreed() && !checkHistory()){
            handleBreed(breedID, breedName);
            handleHistory(breedID, breedName);
        }else if(checkBreed() && checkHistory()){
            handleBreed(breedID, breedName);
        }
        else{
            // if selected doesn't exist show an error message
            e.preventDefault();
            this.setState({error: true})
        }
    }
        // axios call to get all the available breed from API
    componentDidMount(){    
        axios.get("/breeds").then(({ data }) => {
            this.setState({
                loaded: true,
                breeds: data
            });
        });
    }
    render() {
        let { breeds, error, breed, loaded } = this.state;

        return  !loaded ? <Loading/> : (
            <main>
                <form className="form-inline pick-breed">
                    <label className="my-1 mr-2 form-label" htmlFor="">Species</label>
                    <select 
                        className={ `custom-select ${error ? "is-invalid" : null}` }
                        type="text"
                        list="breeds"
                        value= { breed }
                        onChange={ (e) => this.handleChange(e) }
                    >
                        <option>Please select an option</option>
                        {breeds.map((breeds) => {
                            return (<option key={breeds.id}> { breeds.name }</option>
                                )
                            })}
                    </select>

                    <div className="invalid-feedback">
                        Please pick a valid breed.
                    </div>

                    <Link to='/facts'>
                        <button type="submit" onClick= { this.handleClick } className="pick-button">Never Be Tamed</button>
                    </Link>
                </form>

                <History/>
            </main>
               
        );
    }
}

export default Search;