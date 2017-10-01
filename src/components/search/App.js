import React, {Component} from 'react';
import FaSearch from 'react-icons/lib/fa/search';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import './App.css';


class App extends Component{
    constructor(props){
          super(props);
          this.state={
              query:''
          }

    }
    
    UpdateSearch = (event) =>{
           this.setState({query:event.target.value.substr(0,30)})
    }
   

    handleSubmit = (event) =>{
        var query = this.state.query.toLowerCase().replace(' ','+');
        // this.props.history.push(`/search?keywords=${this.state.query}`)
        if(event.key === 'Enter'){
            event.preventDefault();
            this.props.history.push(`/search?q=${query}`)
        }
    }

    handleClick = () =>{
        var query = this.state.query.toLowerCase().replace(' ','+');
            this.props.history.push(`/search?q=${query}`)
    } 

     render(){
         return(
             <form className='nav-span' onSubmit={this.handleClick}>
                <input type='text'
                 value={this.state.query}
                 onChange={this.UpdateSearch}
                 onKeyPress={this.handleSubmit}
                  />
                <Link to={`/search?q=${this.state.query}`}><FaSearch className='search-icon'  /></Link>
             </form>
         )
     }
}


export default withRouter(App);