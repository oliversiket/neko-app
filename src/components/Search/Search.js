import React, { Component } from "react";
import axios from "../../axios"
import Loading from "../Loading/Loading";

class Search extends Component {

    constructor(props){
        super(props);

        this.state = {
            chosenBreed: "",
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
            chosenBreed: id === undefined ? "" : id.id,
            error: false,
        })
    }

    handleClick(e) {
        e.preventDefault();

        let name = this.state.chosenBreed;

        if(this.state.breeds.map(breed => breed.id).includes(name)){
            this.props.handleBreed(name);
        }else{
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
                    <button onClick= { this.handleClick }>Show me</button>
                </form>
               
        );
    }
}

export default Search;