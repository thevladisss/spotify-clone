import {render, screen} from "@testing-library/react";
import AppButton from "../AppButton";
import {describe, it, expect} from "@jest/globals";

describe("AppButton", () => {

  it("transparent button", async () => {
     render(
     <AppButton data-testid="AppButton" transparent>
      Click me
    </AppButton>)

    const element = await screen.findByTestId("AppButton");

     const styles = window.getComputedStyle(element)

    expect(styles).toHaveProperty("backgroundColor", "transparent")
  })
})
