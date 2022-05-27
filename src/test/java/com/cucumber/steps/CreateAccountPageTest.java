package com.cucumber.steps;

import com.automation.utility.Utilites;
import com.automation.websitepages.*;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import java.util.List;

public class CreateAccountPageTest {
    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnSignInLink();
    }

    @And("^I enter email address for create account \"([^\"]*)\"$")
    public void iEnterEmailAddressForCreateAccount(String email) {
        new SignInPage().enterEmailForCreateAccount(Utilites.getRandomString(3)+email);
    }

    @And("^I click on create account button$")
    public void iClickOnCreateAccountButton() {
        new SignInPage().clickOnCreateAccountButton();
    }

    @And("^I enter the first name \"([^\"]*)\"$")
    public void iEnterTheFirstName(String firstname) {
        new CreateAccountPage().enterFirstNameInInfo(firstname);
    }

    @And("^I enter the last name \"([^\"]*)\"$")
    public void iEnterTheLastName(String lastname) {
        new CreateAccountPage().enterlastNameInInfo(lastname);
    }

    @And("^I enter the password \"([^\"]*)\"$")
    public void iEnterThePassword(String password) {
        new CreateAccountPage().enterPasswordInInfo(password);
    }

    @And("^I enter the address \"([^\"]*)\"$")
    public void iEnterTheAddress(String address) {
        new CreateAccountPage().enterAddress(address);
    }

    @And("^I enter the city \"([^\"]*)\"$")
    public void iEnterTheCity(String city) {
        new CreateAccountPage().enterCity(city);
    }

    @And("^I select the state \"([^\"]*)\"$")
    public void iSelectTheState(String state) {
        new CreateAccountPage().selectStateFromDropDown(state);
    }

    @And("^I enter the zipcode \"([^\"]*)\"$")
    public void iEnterTheZipcode(String zipcode) {
        new CreateAccountPage().enterZipCode(zipcode);
    }

    @And("^I select the country \"([^\"]*)\"$")
    public void iSelectTheCountry(String country) {
        new CreateAccountPage().selectCountryFromDropDown(country);
    }

    @And("^I enter the phone number \"([^\"]*)\"$")
    public void iEnterThePhoneNumber(String phoneNumber) {
        new CreateAccountPage().enterMobilePhone(phoneNumber);
    }

    @And("^I enter the alias address \"([^\"]*)\"$")
    public void iEnterTheAliasAddress(String aliasAddress) {
        new CreateAccountPage().enterAliasAddress(aliasAddress);
    }

    @And("^I click on registration button$")
    public void iClickOnRegistrationButton() {
        new CreateAccountPage().clickOnRegisterButton();
    }

    @Then("^I am successfully registration with valid information$")
    public void iAmSuccessfullyRegistrationWithValidInformation() {
    }

    @And("^I can see the my account message \"([^\"]*)\"$")
    public void iCanSeeTheMyAccountMessage(String expectedMyAccountMessage) {
        Assert.assertEquals("my account is not match",expectedMyAccountMessage,new CreateAccountPage().getMyAccountText());
    }

    @Given("^I am on the Sign In Page$")
    public void iAmOnTheSignInPage() {
        new HomePage().clickOnSignInLink();
    }

    @When("^Login using newly create credentials$")
    public void loginUsingNewlyCreateCredentials() {
        new SignInPage().enterEmailForSignIn("wuMjohn@gmail.com");
        new SignInPage().enterPasswordForSignIn("1234567");
        new SignInPage().clickOnSignInButton();
    }

    @Then("^I shall verify the address information in my address section$")
    public void iShallVerifyTheAddressInformationInMyAddressSection() {
    }

    @And("^I add below product to cart$")
    public void iAddBelowProductToCart(DataTable dataTable) throws InterruptedException {
        List<List<String>> userList = dataTable.asLists(String.class);
        for(List<String> e : userList){ //dress,casuua; dress
            new HomePage().clickOnTopMenuTab(e.get(0));
            new DressesPage().SelectCasualDressLinkTab(e.get(1));
            new DressesPage().SelectProduct(e.get(2));
            new ProductPage().getTheModelName(e.get(3));
            new ProductPage().enterQuantity(e.get(4));
        }
    }

    @Then("^I shall validate shopping cart as below$")
    public void iShallValidateShoppingCartAsBelow() {
    }

    @Then("^I shall be able to Buy the product$")
    public void iShallBeAbleToBuyTheProduct() {
    }

    @And("^I shall be able to Buy using cheque payment$")
    public void iShallBeAbleToBuyUsingChequePayment() {
    }
}
