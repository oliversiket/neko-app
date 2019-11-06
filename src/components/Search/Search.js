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
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            list="breeds"
                            value= { breed }
                            onChange={ (e) => this.handleChange(e) }
                        />
                        <datalist id="breeds">
                        { breeds.map((breeds) => {
                                return (<option key={breeds.id}> { breeds.name }</option>
                                )
                            })}
                        </datalist>
                        { error ? <p className="text-warning">Please pick a valid breed!</p> : null }
                    </div>
                    <Link to='/facts'>
                        <button onClick= { this.handleClick }>Show me</button>
                    </Link>
                    
                </form>
               
        );
    }
}

export default Search;