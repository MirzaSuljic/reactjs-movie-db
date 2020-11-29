import React, { useState, Component } from "react";
import { ResultCard } from "./ResultCard";
// import { List } from "./List";



export class Add extends Component {

    constructor(props) {
        super(props);
        this.state = {results: [], allResults: []};
      }

   onChange = e =>{

  
    e.preventDefault();

    if (e.target.value === '') { 
        this.setState({ results: this.state.allResults }); 
        return; 
    } 

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
    .then((res)=> res.json())
    .then((data) =>{
      if(!data.errors){
        this.setState({
            results: data.results
          });
      }else {
        this.setState({
            results: []
          });
      }
    });
};

componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false`)
            .then((res)=> res.json())
            .then((data) =>{
              if(!data.errors){
                this.setState({
                    results: data.results,
                    allResults: data.results
                  });
    
              }else {
                this.setState({
                    allResults:[]
                  });
              }
            });
}
    render(){
        return(
    <div className="add-page">
      <div className="container">
         <div className="add-content">
          <div className="input-wrapper">
            <input type="text" 
              placeholder="Search for a movie"
              onChange={this.onChange}
              />
          </div>
         </div>
         {this.state.results.length >0 && (
         <div className="movies">
           {this.state.results.map(movie=>(
              <div className="child" key={movie.id}>
                <ResultCard movie={movie}/>
              </div>
               ))}
         </div>
         )}
       </div>
    </div>

        );
    }

}
