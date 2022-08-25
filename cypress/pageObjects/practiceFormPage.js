class PracticeFormPage {
    static visit() {
        return cy.visit("https://demoqa.com/automation-practice-form");
    }
    static get firstName() {
        return cy.get(`#firstName`);
    }
    static get lastName() {
        return cy.get(`#lastName`);
    }
    static get email() {
        return cy.get(`#userEmail`);
    }
    static gender(gender) {
        return cy.get(`input[value="${gender}"][type="radio"]`)
    }
    static get mobileNumber() {
        return cy.get(`#userNumber`);
    }
    static get dateOfBirth() {
        return cy.get(`#dateOfBirthInput`);
    }
    static setYear(year) {
        return cy.get(`.react-datepicker__year-select`).select(year);
    }
    static setMonth(month) {
        return cy.get(`.react-datepicker__month-select`).select(month);
    }
    static setDate(date) {
        if (date.length==1) date="00"+date;
        else if (date.length==2) date="0"+date;
        return cy.get(`div.react-datepicker__day--${date}:not(.react-datepicker__day--outside-month)`).click();
    }
    static get subjects() {
        return cy.get(`#subjectsContainer`);
    }
    static get hobbies() {
        return cy.get(`#hobbiesWrapper .custom-control label`);
    }
    static get address() {
        return cy.get(`#currentAddress`);
    }
    static get state() {
        return cy.get(`#state`);
    }
    static get city() {
        return cy.get(`#city`);
    }
    static get submit() {
        return cy.get(`#submit`)
    }
}

export default PracticeFormPage;