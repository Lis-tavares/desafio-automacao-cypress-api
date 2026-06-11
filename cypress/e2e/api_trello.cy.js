describe('API Trello', () => {

  it('Deve validar status code e exibir o campo name da estrutura list', () => {

    cy.request({
      method: 'GET',
      url: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a'
    }).then((response) => {

      expect(response.status).to.eq(200)

      const listName = response.body.data.list.name

      cy.log(`Nome da lista: ${listName}`)

      expect(listName).to.not.be.empty

    })

  })

})