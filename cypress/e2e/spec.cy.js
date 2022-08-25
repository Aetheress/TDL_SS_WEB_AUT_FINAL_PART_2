import PracticeFormPage from "../pageObjects/practiceFormPage";
import FormDetailsConfirmationPage from "../pageObjects/formDetailsConfirmationPage";
import SortablePage from "../pageObjects/sortablePage";

describe('Part 2', () => {
  it('Practice forms', () => {
    PracticeFormPage.visit();
    let firstName = "Ulvis";
    let lastName = "Testetajs";
    let email = "testing.testing123@gmail.com";
    let gender = "Male";
    let mobileNumber = "12345678";
    let dateOfBirthYear = "1984";
    let dateOfBirthMonth = "February";
    let dateOfBirthDay = "29";
    let subjects = "Maths";
    let hobbies = "Music";
    let address = "Testetaju iela 50";
    let state = "Haryana";
    let city = "Panipat";
    PracticeFormPage.firstName.type(firstName);
    PracticeFormPage.lastName.type(lastName);
    PracticeFormPage.email.type(email);
    PracticeFormPage.gender(gender).click({force: true});
    PracticeFormPage.mobileNumber.type(mobileNumber);
    PracticeFormPage.dateOfBirth.click();
    PracticeFormPage.setYear(dateOfBirthYear);
    PracticeFormPage.setMonth(dateOfBirthMonth);
    PracticeFormPage.setDate(dateOfBirthDay);
    PracticeFormPage.subjects.type(`${subjects}{enter}`);
    PracticeFormPage.hobbies.contains(hobbies).click();
    PracticeFormPage.address.type(address);
    //typing in with only first letters to check autocompletion
    PracticeFormPage.state.type(`${state.substring(0, 2)}{enter}`);
    PracticeFormPage.city.type(`${city.substring(0, 2)}{enter}`);
    PracticeFormPage.submit.click();
    FormDetailsConfirmationPage.getField("Student Name").should(
      "have.text", 
      `${firstName} ${lastName}`
    );
    FormDetailsConfirmationPage.getField("Student Email").should("have.text", email);
    FormDetailsConfirmationPage.getField("Gender").should("have.text", gender);
    FormDetailsConfirmationPage.getField("Mobile").should("have.text", mobileNumber);
    FormDetailsConfirmationPage.getField("Date of Birth").should(
      "have.text", 
      `${dateOfBirthDay} ${dateOfBirthMonth},${dateOfBirthYear}`
    );
    FormDetailsConfirmationPage.getField("Subjects").should("have.text", subjects);
    FormDetailsConfirmationPage.getField("Hobbies").should("have.text", hobbies);
    FormDetailsConfirmationPage.getField("Address").should("have.text", address);
    FormDetailsConfirmationPage.getField("State and City").should(
      "have.text", 
      `${state} ${city}`
    );
  })
  it("Interactions - Sortable", () => {
    SortablePage.visit();
    SortablePage.rows.should("contain.text", "OneTwoThreeFourFiveSix");
    SortablePage.sortRows(6);
    SortablePage.rows.should("contain.text", "SixFiveFourThreeTwoOne");
  });
})