import React, { Component } from "react";
import axios from "../../axios"
import Loading from "../Loading/Loading";

class Search extends Component {

    constructor(props){
        super(props);

        this.state = {
            breeds: "",
            loaded: false
        }
    }
    
    handleClick() {
        axios.get("/breeds").then( data => { console.log(data.data);
        }, error => {
        console.log(error); 
        })
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
        let { breeds, loaded } = this.state;

        return !loaded ? <Loading/> : (
            <form>
                <div class="form-group">
                    <input
                        type="text"
                        list="breeds"
                    />
                    <datalist id="breeds">
                        { breeds.map((breeds) => {
                            return (<option key={breeds.id}> { breeds.name }</option>
                            )
                        })}
                    </datalist>
                </div>
                <button onClick= { this.handleClick }>Show me</button>
            </form>
        );
    }
}

export default Search;