Cypress.Commands.add('getTrelloAction', (id) => {
  const baseUrl =
    Cypress.env('TRELLO_BASE_URL') ||
    'https://api.trello.com/1/actions'

  return cy.request({
    method: 'GET',
    url: `${baseUrl}/${id}`
  })
})