import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../Style/ComponentStyle/Movie.css';

const Movie = props => {
	return (
		<div className="movie">
			<img className="movie_img" src={props.moviePoster} art={props.movieTitle}></img>

			<div>
				<h2 className="movie_title">
					<Link to={`/moviepage/${props.movieID}`}>{props.movieTitle}</Link>
				</h2>
				<h3 className="movie__year">{props.movieYear}</h3>
				<h3> {props.movieType}</h3>
			</div>
		</div>
	);
};

Movie.propTypes = {
	movieID: PropTypes.string.isRequired,
	movieTitle: PropTypes.string.isRequired,
	movieYear: PropTypes.string.isRequired,
	moviePoster: PropTypes.string.isRequired,
	movieType: PropTypes.string.isRequired,
};
export default Movie;
