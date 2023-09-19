import Weather from "./Weather";
import { render } from "@testing-library/react";

describe("Weather", () => {
  it("Renders Component According To Snapshot", () => {
    const { container } = render(<Weather city={null} />);

    expect(container).toMatchSnapshot();
  });
});
