import { Button } from 'reactstrap';
import propTypes from 'prop-types';
import "./Rocket.scss";

const Rocket = ({ rocketData }) => {
  return (
    <div className="d-flex">
      <img className="rocket-img" src={rocketData.flickr_images} alt={rocketData.rocket_name} />
      <div className="rocket-data">
        <h2 className="roc-name">{rocketData.rocket_name}</h2>
        <p className="roc-text">{rocketData.description}</p>
        <Button color="primary">Reserve Rocket</Button>
      </div>
    </div>
  )
}

Rocket.propTypes = {
    rocketData: propTypes.oneOfType([propTypes.object]).isRequired,
};

export default Rocket;
