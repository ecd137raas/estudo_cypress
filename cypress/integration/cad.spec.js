
describe('Cadastro', () => {
    it('Usuario deve se tornar um entregador', () => {
        cy.viewport(1440, 900)
        cy.visit('http://buger-eats.vercel.app')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        let entregador = {
            nome: 'Emerson Duarte',
            cpf: '00000004141',
            email: 'raasjava@gmail.com',
            whatsapp: '4199999999'
        }
        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

    })
})