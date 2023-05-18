import { expect, it, describe } from "vitest";
import renderer from "react-test-renderer";
import store from "../redux/store";
import { Provider } from "react-redux";
import { MyProfile } from "../components";

describe("MyProfile", () => {
  it("renders MyProfile correctly", () => {
    const myProfile = renderer
      .create(
        <Provider store={store}>
          <MyProfile />
        </Provider>
      )
      .toJSON();
    expect(myProfile).toMatchSnapshot();
  });
});
