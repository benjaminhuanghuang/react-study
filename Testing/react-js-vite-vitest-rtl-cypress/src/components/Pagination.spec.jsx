import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
// Component to test
import Pagination from "./Pagination";

describe("Pagination", () => {
  test("renders default error state", () => {
    render(<Pagination total={50} limit={10} currentPage={1} />);
    // screen.debug();
    const pageContainer = screen.getAllByTestId("page-container");

    expect(pageContainer).toHaveLength(5);
    expect(pageContainer[0]).toHaveTextContent("1");
  });

  test("should emit clicked page", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(
      <Pagination
        total={50}
        limit={10}
        currentPage={1}
        selectPage={handleClick}
      />
    );
    const pageContainer = screen.getAllByTestId("page-container");
    await user.click(pageContainer[0]);
    expect(handleClick).toHaveBeenCalledOnce();
  });
});
