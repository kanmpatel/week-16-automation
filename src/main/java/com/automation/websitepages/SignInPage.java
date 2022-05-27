package com.automation.websitepages;

import com.automation.utility.Utilites;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SignInPage extends Utilites {

    public static final Logger log = LogManager.getLogger(SignInPage.class);

    public SignInPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//input[@id='email']")
    WebElement emailAddressField;
    @CacheLookup
    @FindBy(id = "passwd")
    WebElement passwordField;
    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Sign in']")
    WebElement signInButton;
    @CacheLookup
    @FindBy(xpath = "//div[@class=\"alert alert-danger\"]/descendant::li")
    WebElement errorMessageField;
    @CacheLookup
    @FindBy(xpath = "//div[@class=\"header_user_info\"]//a[contains(text(),'Sign out')]")
    WebElement signOutLink;
    @CacheLookup
    @FindBy(xpath = "//h1[@class='page-heading']")
    WebElement authenticationText;
    @CacheLookup
    @FindBy(xpath = "//h3[normalize-space()='Create an account']")
    WebElement createAccountText;
    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Create an account']")
    WebElement createAccountButton;
    @CacheLookup
    @FindBy(xpath = "//input[@id='email_create']")
    WebElement emailFieldInCreateAccount;

    public void enterEmailForCreateAccount(String email) {
        log.info("enter the 'EMAIL ADDRESS' field for 'CREATE ACCOUNT' : " + email + " to email address field");
        sendTextToElement(emailFieldInCreateAccount, email);
    }

    public void clickOnCreateAccountButton() {
        log.info("clicking On 'CREATE ACCOUNT' button : "+ createAccountButton.toString());
        clickOnElement(createAccountButton);
    }

    public void enterEmailForSignIn(String email) {
        log.info("enter the 'EMAIL ADDRESS' for login :" + email + " to email address field");
        sendTextToElement(emailAddressField, email);
    }

    public void enterPasswordForSignIn(String password) {
        log.info("enter the 'PASSWORD' for login :" + password + " to password address field");
        sendTextToElement(passwordField, password);
    }

    public String getAuthenticationText() {
        log.info("get the text of 'AUTHENTICATION' : "+ authenticationText.toString());
        return getTextFromElement(authenticationText);
    }

    public String getCreateAnAccountText() {
        log.info("get the text of 'CREATE ACCOUNT' : "+ createAccountText.toString());
        return getTextFromElement(createAccountText);
    }

    public void clickOnSignInButton() {
        log.info("clicking On 'SIGNIN' button : "+ signInButton.toString());
        clickOnElement(signInButton);
    }

    public String getErrorMessage(){
        log.info("get the text of 'ERROR MESSAGE' : "+ errorMessageField.toString());
        return  getTextFromElement(errorMessageField);
    }

    public void signInApplication(String username, String password) {
        enterEmailForSignIn(username);
        enterPasswordForSignIn(password);
        clickOnElement(signInButton);

    }

    public void clickOnSignOutButton(){
        clickOnElement(signOutLink);
    }

    public boolean signOutLinkDisplayed(){
        log.info("get the text of 'SIGNIN' link : "+ signOutLink.toString());
        return signOutLink.isDisplayed();
    }

}
