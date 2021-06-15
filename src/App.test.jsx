import App from "./App";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders three <App /> components", () => {
    expect(wrapper.find(".App").exists()).toBe(true);
  });
  it("renders form", () => {
    expect(wrapper.find("form").exists()).toBe(true);
  });
  it("renders input", () => {
    expect(wrapper.find("input").exists()).toBe(true);
  });
  it("renders text", () => {
    expect(wrapper.find("i").text()).toEqual(
      "Shortened links will appear here:"
    );
  });
  it("renders input value", () => {
    expect(wrapper.find("input").prop("value")).toEqual("");

    wrapper.find("input").simulate("change", { target: { value: "Bekzat" } });
    wrapper.update();

    expect(wrapper.find("input").prop("value")).toEqual("Bekzat");
  });

  it("renders enter button", () => {
    expect(wrapper.find("button").exists()).toBe(true);
    expect(wrapper.find("button").text()).toEqual("Submit");
  });
});
