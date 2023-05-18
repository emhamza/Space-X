import { expect, it, describe } from "vitest";
import renderer from "react-test-renderer";
import store from "../redux/store";
import reducer, {
  reserveRocket,
  cancelReservation,
} from "../redux/RocketSlice/rocketsSlice";
import { Provider } from "react-redux";
import { Rockets } from "../components";
import { render } from "@testing-library/react";

describe("Rockets", () => {
  it("should reserve rockets correctly", () => {
    const state = {
      rockets: [
        {
          id: "0",
          name: "Rocket 1",
          description: "Rocket 1",
          image: "image",
        },
        {
          id: "1",
          name: "Rocket 2",
          description: "Rocket 2",
          image: "image",
        },
        {
          id: "2",
          name: "Rocket 3",
          description: "Rocket 3",
          image: "image",
        },
      ],
      isLoading: false,
    };
    expect(reducer(state, reserveRocket("1"))).toEqual({
      rockets: [
        {
          id: "0",
          name: "Rocket 1",
          description: "Rocket 1",
          image: "image",
        },
        {
          id: "1",
          name: "Rocket 2",
          description: "Rocket 2",
          image: "image",
          reserved: true,
        },
        {
          id: "2",
          name: "Rocket 3",
          description: "Rocket 3",
          image: "image",
        },
      ],
      isLoading: false,
    });
  });

  it("should cancel rockets reservation correctly", () => {
    const state = {
      rockets: [
        {
          id: "0",
          name: "Rocket 1",
          description: "Rocket 1",
          image: "image",
          reserved: true,
        },
        {
          id: "1",
          name: "Rocket 2",
          description: "Rocket 2",
          image: "image",
          reserved: true,
        },
        {
          id: "2",
          name: "Rocket 3",
          description: "Rocket 3",
          image: "image",
          reserved: true,
        },
      ],
      isLoading: false,
    };
    expect(reducer(state, cancelReservation("1"))).toEqual({
      rockets: [
        {
          id: "0",
          name: "Rocket 1",
          description: "Rocket 1",
          image: "image",
          reserved: true,
        },
        {
          id: "1",
          name: "Rocket 2",
          description: "Rocket 2",
          image: "image",
          reserved: false,
        },
        {
          id: "2",
          name: "Rocket 3",
          description: "Rocket 3",
          image: "image",
          reserved: true,
        },
      ],
      isLoading: false,
    });
  });
  
  it("renders rocket correctly", () => {
    const rockets = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>
      )
      .toJSON();
    expect(rockets).toMatchSnapshot();
  });
  
  it("renders rocket correctly", () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>
    );
  });
});


