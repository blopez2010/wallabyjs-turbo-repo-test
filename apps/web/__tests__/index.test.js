import { render } from "@testing-library/react";
import HomePage from "../pages";

test("Test nesting WallabyJs", () => {
  render(<HomePage />);

  expect(true).toBeTruthy();
})