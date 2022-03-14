import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "../../../components/Search";
import Providers from "../../../providers";

describe("button component", () => {
    test("existe o botao na aplicaçao", () => {

        render(<Search />)
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument()
    })

})
describe("Input component", () => {
  test("e possivel adcionar valor ao input", () => {
    render(
      <Providers>
        <Search />
      </Providers>
    );
    const input = screen.getByPlaceholderText("Insira o CEP");
    userEvent.type(input, "69088241");

    expect(input).toHaveValue(69088241);
  });
});
