describe('API Trello', () => {
  const actionId = '592f11060f95a3d3d46a987a'

  it('valida status e campo name via comando customizado', () => {
    cy.getTrelloAction(actionId).then(({ status, body }) => {
      expect(status).to.equal(200)

      const listName = body?.data?.list?.name

      cy.log(`Nome da lista: ${listName}`)

      expect(listName)
        .to.be.a('string')
        .and.to.not.be.empty
    })
  })
})