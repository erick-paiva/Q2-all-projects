import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../../App";

const mockedHandleSearch = jest.fn();

jest.mock("../../../providers/CepProvider", () => {
  return {
    useLocateCep: () => ({
      handleSearch: mockedHandleSearch,
      ceps: {
        bairro: "Jorge Teixeira"
      },
      setCepNumber: jest.fn()
    })
  };
});

describe("Teste de integraçao", () => {
  test("e possivel adcionar valor ao input e clicar no botão", async () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Insira o CEP");
    const button = screen.getByRole("button");

    userEvent.type(input, "69088241");
    fireEvent.click(button);

    await (() => {
        expect(mockedHandleSearch).toHaveBeenCalled();
        expect(input).toHaveValue(69088241);
    })

  });
});
