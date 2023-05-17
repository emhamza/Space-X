import { useSelector } from 'react-redux';
import './MyProfile.scss';

const MyProfile = () => {
  const { rockets } = useSelector((store) => store.rockets);
  console.log(rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true); 
 
  const renderRocket = () => (
    <table className='rocket-table'>
      {reservedRockets.map((res) => (
        <tr className="table-r" key={res.id}>
          <p className='p-3'>
            {res.rocket_name}
          </p>
        </tr>
      ))}
    </table>
  );

  return (
    <div className="container-md">
      <div className='p-3'>
        <h2>My Rockets</h2>
        {reservedRockets.length > 0 && renderRocket()}
      </div>
    </div>
  );
};

export default MyProfile;
