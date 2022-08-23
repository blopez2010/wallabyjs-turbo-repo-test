import { render } from "@testing-library/react";
import HomePage from "../pages/index";

test("Test nesting WallabyJs", () => {
  render(<HomePage />);

  expect(true).toBeTruthy();
})