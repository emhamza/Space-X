// eslint-disable-next-line no-unused-vars
import * as React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Missions.scss";
import {
  getMissions,
  joinMission,
  cancelMission,
} from "../../redux/missionSlice/missionsSlice";

const Missions = () => {
  const missions = useSelector((state) => state.mission.missions);
  const { Loading, error } = useSelector((state) => state.mission);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  if (Loading) return <h4>Loading...</h4>;

  if (error) return <h5>Error!!</h5>;

  const missionsList = JSON.parse(JSON.stringify(missions));
  return (
    <div className="table-container">
      <TableContainer component={Paper}>
        <Table className="table" aria-label="simple table">
          <TableHead>
            <TableRow sx={{ border: 1 }}>
              <TableCell sx={{ border: 1 }}>Mission</TableCell>
              <TableCell sx={{ border: 1 }} className="mission-desc">
                Description
              </TableCell>
              <TableCell sx={{ border: 1 }} className="mission-status">
                Status
              </TableCell>
              <TableCell
                sx={{ border: 1 }}
                className="mission-option"
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {missionsList.map((mission) => (
              <TableRow key={mission.mision_id} sx={{ border: 1 }}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ border: 1 }}
                  className="mission-name"
                >
                  <h4
                    style={{
                      textAlign: "center",
                      fontSize: 22,
                      fontFamily: "monospace",
                    }}
                  >
                    {mission.mission_name}
                  </h4>
                </TableCell>
                <TableCell sx={{ border: 1 }} className="mission-desc">
                  <p>{mission.description}</p>
                </TableCell>
                {!mission.joined && (
                  <>
                    <TableCell sx={{ border: 1 }} className="mission-status">
                      <h3>not a member</h3>
                    </TableCell>
                    <TableCell sx={{ border: 1 }} className="mission-option">
                      <button
                        style={{ color: "gray" }}
                        id={mission.mission_id}
                        onClick={(e) => dispatch(joinMission(e.target.id))}
                      >
                        Join Mission
                      </button>
                    </TableCell>
                  </>
                )}
                {mission.joined && (
                  <>
                    <TableCell sx={{ border: 1 }} className="mission-status">
                      <h3 style={{ backgroundColor: "rgb(63, 152, 168)" }}>
                        Active Member
                      </h3>
                    </TableCell>
                    <TableCell sx={{ border: 1 }} className="mission-option">
                      <button
                        style={{ color: "red", borderColor: "red" }}
                        id={mission.mission_id}
                        onClick={(e) => dispatch(cancelMission(e.target.id))}
                      >
                        Leave Mission
                      </button>
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Missions;
