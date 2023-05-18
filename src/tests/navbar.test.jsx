import { Navbar } from "../components";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, beforeEach, expect } from "vitest";
import renderer from "react-test-renderer";
// import store from "../redux/store";
// import { Provider } from "react-redux";

describe("Navbar", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  });
  it("should render the logo and title", () => {
    const logo = screen.getByAltText("logo");
    const title = screen.getByText("Space Travelers' Hub");
    expect(logo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
  it("should render the correct nav links", () => {
    const rocketsLink = screen.getByText("Rockets");
    const missionsLink = screen.getByText("Missions");
    const profileLink = screen.getByText("My Profile");
    expect(rocketsLink).toHaveAttribute("href", "/");
    expect(missionsLink).toHaveAttribute("href", "/missions");
    expect(profileLink).toHaveAttribute("href", "/profile");
  });
  it("should apply the active class to the active link", () => {
    const rocketsLink = screen.getByText("Rockets");
    const missionsLink = screen.getByText("Missions");
    const profileLink = screen.getByText("My Profile");
    expect(rocketsLink).toHaveClass("active");
    expect(missionsLink).not.toHaveClass("active");
    expect(profileLink).not.toHaveClass("active");
  });
  it("renders navbar correctly", () => {
    const navbar = renderer
      .create(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      )
      .toJSON();
    expect(navbar).toMatchSnapshot();
  });
});
