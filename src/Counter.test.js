import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "./Counter";

describe(Counter, () => {
  it("counter displays correct initial count", () => {
    render(<Counter initialCount={0} />);
    const countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });

  it("count should increment by 1 if the increment button is clicked", () => {
    render(<Counter initialCount={0} />);
    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    const countValue1 = Number(screen.getByTestId("count").textContent);
    expect(countValue1).toEqual(0);
    fireEvent.click(incrementBtn);
    const countValue2 = Number(screen.getByTestId("count").textContent);
    expect(countValue2).toEqual(1);
  });
});
