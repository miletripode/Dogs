import React from "react";
//import { connect } from "react-redux";
//import { Link } from 'react-router-dom';
import './Search.css';

function Search(){
    return (
        <div >
            <form className="search" >
            <div>
                <label className="label" htmlFor="title">Breed: </label>
                <input
                type="text"
                id="title"
                autoComplete="off"
                />
            </div>
            <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search;

// export class Buscador extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         title: ""
//       };
//     }
//     handleChange(event) {
//       this.setState({ title: event.target.value });
//     }
//     handleSubmit(event) {
//       event.preventDefault();
//       this.props.getMovies(this.state.title);
//     }
  
//     render() {
//       const { title } = this.state;
//       return (
//         <div>
//           <h2>Buscador</h2>
//           <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
//             <div>
//               <label className="label" htmlFor="title">Película: </label>
//               <input
//                 type="text"
//                 id="title"
//                 autoComplete="off"
//                 value={title}
//                 onChange={(e) => this.handleChange(e)}
//               />
//             </div>
//             <button type="submit">BUSCAR</button>
//           </form>
//           <ul>
//            {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
//            {this.props.moviesLoaded && this.props.moviesLoaded.map(movie => (
//              <div key={movie.imdbID}>
//               <Link to={`/movie/${movie.imdbID}`}>
//                 {movie.Title}
//               </Link>
//               <button onClick={() => this.props.addMovieFavorite({id: movie.imdbID, title: movie.Title})}>FAV</button>
//              </div>
//             ))
//           }
//           </ul>
//         </div>
//       );
//     }
//   }
  
//   function mapStateToProps(state) {
//     return {
//       moviesLoaded: state.moviesLoaded
//     };
//   }
  
//   function mapDispatchToProps(dispatch) {
//     return {
//       addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
//       getMovies: title => dispatch(getMovies(title))
//     };
//   }
  
//   export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(Buscador);