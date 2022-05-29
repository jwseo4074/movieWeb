import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Movie = props => {
	return (
		<div>
			<div>
				<Link to={`/moviepage/${props.movieID}`}>
					{props.movieTitle}
					<span>({props.movieYear})</span>
				</Link>
				<p> Type : {props.movieType}</p>
			</div>
			<img src={props.moviePoster} art={props.movieTitle}></img>
			<hr />
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
