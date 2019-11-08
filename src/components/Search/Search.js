import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "../../axios"
import Loading from "../Loading/Loading";

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
        let id = breeds.find(breed => breed.name === e.currentTarget.value)

        this.setState({
            chosenBreedID: id === undefined ? "" : id.id,
            chosenBreedName: id === undefined ? "" : id.name,
            error: false,
        })
    }

    handleClick(e) {
        let breedID = this.state.chosenBreedID;
        let breedName = this.state.chosenBreedName;

        if(this.state.breeds.map(breed => breed.id).includes(breedID)){
            this.props.handleBreed(breedID, breedName);
            this.props.handleHistory(breedID, breedName);
        }else{
            e.preventDefault();
            this.setState({error: true})
        }
    }

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

                <form className="form-inline pick-breed">
                    <label className="my-1 mr-2 form-label" htmlFor="">Species</label>
                    <select 
                        className={ `custom-select my-1 mr-sm-2 ${error ? "is-invalid" : null}` }
                        id=""
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
                        <button type="submit" onClick= { this.handleClick } className="pick-button">Submit</button>
                    </Link>

                </form>
               
        );
    }
}

export default Search;