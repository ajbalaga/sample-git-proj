import React, { Component } from 'react';
import '../css/body.css';
import ReactTable from "./table";
import Hamoni from "hamoni-sync";

var data = [
    {id: 1, name: 'Gob', value: '2'},
    {id: 2, name: 'Buster', value: '5'},
    {id: 3, name: 'George Michael', value: '4'}
  ];
class Body extends Component
{

    
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
      
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

      

    render ()
    {

        return (
            <div className="form">
                <form onSubmit={ this.handleSubmit }>
                    <label>
                        Name:
                    <input type="text" value={ this.state.value } onChange={ this.handleChange } />
                    </label><br/><br/>
                    
                    <label>
                        Age:
                    <input type="text" value={ this.state.value } onChange={ this.handleChange } />
                    </label><br/><br/>
                    
                    <label>
                        Occupation:
                    <input type="text" value={ this.state.value } onChange={ this.handleChange } />
                    </label><br/><br/>
                    
                    <input type="submit" value="Submit" />
                </form>
                
                <div>
                <Body data={data}></Body>
                </div>
            </div>
            
        );
    }
}

export default Body;