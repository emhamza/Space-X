import { expect, it, describe } from "vitest";
import renderer from "react-test-renderer";
import { render } from '@testing-library/react';
import store from "../redux/store";
import { Provider } from "react-redux";
import { Missions } from "../components";
import reducer, {
  joinMission,
  cancelMission,
} from "../redux/missionSlice/missionsSlice";

describe("Missions", () => {
  it("should reserve missions correctly", () => {
    const state = {
      missions: [
        {
          mission_id: "0",
          mission_name: "Mission 1",
          description: "Mission 1",
        },
        {
          mission_id: "1",
          mission_name: "Mission 2",
          description: "Mission 2",
        },
        {
          mission_id: "2",
          mission_name: "Mission 3",
          description: "Mission 3",
        },
      ],
      Loading: false,
    };
    expect(reducer(state, joinMission("1"))).toEqual({
      missions: [
        {
          mission_id: "0",
          mission_name: "Mission 1",
          description: "Mission 1",
        },
        {
          mission_id: "1",
          mission_name: "Mission 2",
          description: "Mission 2",
          joined: true,
        },
        {
          mission_id: "2",
          mission_name: "Mission 3",
          description: "Mission 3",
        },
      ],
      Loading: false,
    });
  });

  it("should cancel missions reservation correctly", () => {
    const state = {
      missions: [
        {
          mission_id: "0",
          mission_name: "mission 1",
          description: "mission 1",
          joined: true,
        },
        {
          mission_id: "1",
          mission_name: "mission 2",
          description: "mission 2",
          joined: true,
        },
        {
          mission_id: "2",
          mission_name: "mission 3",
          description: "mission 3",
          joined: true,
        },
      ],
      isLoading: false,
    };
    expect(reducer(state, cancelMission("1"))).toEqual({
      missions: [
        {
          mission_id: "0",
          mission_name: "mission 1",
          description: "mission 1",
          joined: true,
        },
        {
          mission_id: "1",
          mission_name: "mission 2",
          description: "mission 2",
          joined: false,
        },
        {
          mission_id: "2",
          mission_name: "mission 3",
          description: "mission 3",
          joined: true,
        },
      ],
      isLoading: false,
    });
  });
  it("renders missions correctly", () => {
    const missions = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>
      )
      .toJSON();
    expect(missions).toMatchSnapshot();
  });
  it("renders missions correctly", () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>
    );
  });
});
