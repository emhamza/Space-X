import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReservation } from '../../redux/RocketSlice/rocketsSlice';
import { Button } from 'reactstrap';
import propTypes from 'prop-types';
import "./Rocket.scss";

const Rocket = ({ rocketData }) => {
  const dispatch = useDispatch();
  
  const handleReserveClick = () => {
    dispatch(reserveRocket(rocketData.id))
  }

  const cancelReservationHandler = () => {
    dispatch(cancelReservation(rocketData.id))
  }

  return (
    <div className="d-flex">
      <img className="rocket-img" src={rocketData.flickr_images} alt={rocketData.rocket_name} />
      <div className="rocket-data">
        <h2 className="roc-name">{rocketData.rocket_name}</h2>
        {rocketData.reserved && (
         <>
            <p className="roc-text">
              <Button className="cancel-btn" type="submit">Reserved</Button>
              {rocketData.description}
            </p>
            <Button className="btn-outline-secondary" color="" onClick={cancelReservationHandler}>Cancel Reservation</Button>
          </>
        )}
        {!rocketData.reserved && (
          <>
            <p>{rocketData.description}</p>
            <Button color="primary" onClick={handleReserveClick}>Reserve Rocket</Button>
          </>
        )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
    rocketData: propTypes.oneOfType([propTypes.object]).isRequired,
};

export default Rocket;
