import { render, screen } from "@testing-library/react";

import { Home } from ".";

describe("<Home />", () => {
  it("should render the paragraph ", () => {
    const { container } = render(<Home />);

    expect(screen.getByTestId("iddoteste")).toBeInTheDocument();
    expect(screen.getByText("heading(h2)")).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
