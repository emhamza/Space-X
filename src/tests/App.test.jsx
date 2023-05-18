import { it, describe } from "vitest";
import store from "../redux/store";
import { Provider } from "react-redux";
import { MyProfile, Missions, Rockets, Navbar } from "../components";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

describe("App tests", () => {
  it("renders navbar correctly", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  });
  it("renders profile correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <MyProfile />
        </Provider>
      </BrowserRouter>
    );
  });
  it("renders Rockets correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Rockets />
        </Provider>
      </BrowserRouter>
    );
  });
  it("renders Missions correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Missions />
        </Provider>
      </BrowserRouter>
    );
  });
});
