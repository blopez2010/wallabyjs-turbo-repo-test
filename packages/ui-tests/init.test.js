import React from 'react';
import { Button } from "../ui/Button";
import { render } from "@testing-library/react";

test("testing packages only", () => {
  render(<Button />);
  
  expect(true).toBeTruthy();
});