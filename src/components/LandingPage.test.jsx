import { test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import LandingPage from "./LandingPage";

test("CTA text exists", () => {
  render(<LandingPage />);
  
  const text = screen.getByText(/start the project/i);
  expect(text).toBeInTheDocument();
});