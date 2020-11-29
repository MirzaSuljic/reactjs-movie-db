const { render } = require("@testing-library/react");

class List extends Component {

    async componentDidMount() {
        const movies = await fetch(`https://api.themoviedb.org/3/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false`);
        const moviesJSON = await movies.json();
        
        if (moviesJSON) {
            this.setState({
            data: moviesJSON,
            loading: false,
            });
    }
}
    render(){
        return(
            <div>
                <h2>{`#${movie.ranking} - ${movie.title} (${movie.year})`}</h2>
                <img src={movie.img.src} alt={movie.img.alt} width='200' />
                <p>{`Distributor: ${movie.distributor}`}</p>
                <p>{`Amount: ${movie.amount}`}</p>
            </div>
        )

    }

}
