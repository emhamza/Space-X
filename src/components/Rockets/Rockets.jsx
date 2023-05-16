import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Rocket from "./Rocket";
import { fetchRockets } from "../../redux/RocketSlice/rocketsSlice";

const Rockets = () => {
  const { rockets, isLoading, error} = useSelector(
    (state) => state.rockets,
  )
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  if(isLoading){
    return(
      <div>
        <p>Bear With Us, Your Rockets are Loading</p>
      </div>
    )
  }
  if(error){
    return (
      <div>
        <p>Opps, there is an error</p>
      </div>
    )
  }
  return (
    <div>
     {rockets.map((rocket) => {
      return <Rocket key={rocket.id} rocketData={rocket} />
     })}
    </div>
  )
}

export default Rockets;
