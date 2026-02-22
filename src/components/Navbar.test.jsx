import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

test("renders logo link", () => {
  render(<Navbar />);
  
  const logoLink = screen.getByRole("link", { name: "" }); // SVG has no text
  expect(logoLink).toHaveAttribute("href", "#home");
});