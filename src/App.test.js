import React from "react";
import { render, screen } from "@testing-library/react";
import { ShopApp } from "./ShopApp";

test("renders learn react link", () => {
  render(<ShopApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
