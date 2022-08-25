class FormDetailsConfirmationPage {
    static getField(label) {
        return cy.get(`tbody > tr`).contains(label).next();
    }
}

export default FormDetailsConfirmationPage;