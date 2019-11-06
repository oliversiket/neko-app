import React, { Component } from "react";
import axios from "../../axios"
import Loading from "../Loading/Loading";

class Facts extends Component {
    constructor(props){
        super(props)

        this.state = {
            facts: [],
            loaded: false,
        }
    }

    componentDidMount(){
        let { chosenBreed } = this.props;

        axios.get(`breeds/search?q=${chosenBreed}`).then(({ data }) => {
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
            { !loaded ? <Loading/> : ( facts.map((item, index) => {
                return (<li key={index}> Name: {item.name}</li>)
            }) )}
             
            </main>
        )
    }

}
export default Facts