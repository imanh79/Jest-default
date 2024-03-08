import { render, screen } from "@testing-library/react";
import HomePage from "@/pages/index";
import Home from "@/pages/index";

describe("HomePage", () => {
  it("should have Docs text", () => {
    render(<Home />); // ARRANGE

    const myElem = screen.getByText("arrived"); // ACT

    expect(myElem).toBeInTheDocument(); // ASSERT
  });

});
