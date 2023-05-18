import { useSelector } from "react-redux";
import "./MyProfile.scss";

const MyProfile = () => {
  const { rockets } = useSelector((store) => store.rockets);
  const { missions } = useSelector((store) => store.mission);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  const joinedMissions = missions.filter((mission) => mission.joined === true);

  const renderRocket = () => (
    <table className="rocket-table">
      {reservedRockets.map((res) => (
        <tr className="table-r" key={res.id}>
          <p className="p-3">{res.rocket_name}</p>
        </tr>
      ))}
    </table>
  );

  const renderMissions = () => (
    <table className="rocket-table">
      {joinedMissions.map((mission) => (
        <tr className="table-r" key={mission.mission_id}>
          <p className="p-3">{mission.mission_name}</p>
        </tr>
      ))}
    </table>
  );

  return (
    <div style={{ display: "flex", paddingLeft: 90, paddingRight: 90 }}>
      <div className="container-md">
        <div className="p-3">
          <h2>My Missions</h2>
          {joinedMissions.length > 0 && renderMissions()}
        </div>
      </div>
      <div className="container-md">
        <div className="p-3">
          <h2>My Rockets</h2>
          {reservedRockets.length > 0 && renderRocket()}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
