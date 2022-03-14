context("Register", () => {
  it("possivel adcionar um cep no input, clicar no botao e retonar um endereço", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1366, 768);

    cy.intercept("GET", "https://api.postmon.com.br/v1/cep/69088241", {
        statusCode: 200,
        body: {
            "bairro": "Jorge Teixeiraaaa",
            "cidade": "Manaus",
            "logradouro": "Beco Itaúba",
            "estado_info": {
              "area_km2": "1.559.149,074",
              "codigo_ibge": "13",
              "nome": "Amazonas"
            },
            "cep": "69088241",
            "cidade_info": {
              "area_km2": "11401,092",
              "codigo_ibge": "1302603"
            },
            "estado": "AM"
          }
      })

      cy.get("input[type=number]").type("69088241")
      cy.get("button").click()
      cy.contains("Bairro")
  });
});
