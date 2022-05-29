import PropTypes from 'prop-types';

const Movie = props => {
	return (
		<div key={props.movieID}>
			<div>
				<h3>
					{props.movieTitle}
					<span>({props.movieYear})</span>
				</h3>
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
