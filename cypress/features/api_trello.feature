Feature: API Trello

  Scenario: Validar status e campo name da action do Trello
    Given que exista uma action válida no Trello
    When consultar a action pelo identificador informado
    Then o serviço deve retornar status code 200
    And o campo data.list.name deve estar preenchido