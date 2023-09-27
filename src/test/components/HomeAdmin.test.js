import { render, screen } from "@testing-library/react";
import { HomeAdmin } from "../../components/home/HomeAdmin"

describe("Examples", () => {
  it("should should be a teapot", () => {
    expect(1).toBe(1);
  });

  it("should render Home", () => {
    render(<HomeAdmin />);
    screen.debug();
  });
});