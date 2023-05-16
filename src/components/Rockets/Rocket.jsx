import propTypes from 'prop-types';
const Rocket = ({ rocketData }) => {
  return (
    <div>
      <img src={rocketData.flickr_images} alt={rocketData.rocket_name} />
      <div>
        <h2>{rocketData.rocket_name}</h2>
        <p>{rocketData.description}</p>
        <button>Reserve Rocket</button>
      </div>
    </div>
  )
}

Rocket.propTypes = {
    rocketData: propTypes.oneOfType([propTypes.object]).isRequired,
};

export default Rocket;
