package com.automation.websitepages;

import com.automation.utility.Utilites;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CreateAccountPage extends Utilites {

    public static final Logger log = LogManager.getLogger(CreateAccountPage.class);
    public CreateAccountPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='customer_firstname']")
    WebElement infoFirstNameField;
    @CacheLookup
    @FindBy(id = "customer_lastname")
    WebElement infoLastNameField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='passwd']")
    WebElement infoPassWordField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='address1']")
    WebElement addressField;
    @CacheLookup
    @FindBy(id = "city")
    WebElement cityField;
    @CacheLookup
    @FindBy(xpath = "//select[@id='id_state']")
    WebElement stateDropDownField;
    @CacheLookup
    @FindBy(id = "postcode")
    WebElement zipCodeField;
    @CacheLookup
    @FindBy(xpath = "//select[@id='id_country']")
    WebElement countryDropDownField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='phone_mobile']")
    WebElement mobileNumberField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='alias']")
    WebElement addressAliasField;
    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Register']")
    WebElement registerButton;
    @CacheLookup
    @FindBy(xpath = "//h1[@class='page-heading']")
    WebElement myAccountText;
    @CacheLookup
    @FindBy(xpath = "//a[@title='Log me out']")
    WebElement signOutLink;



    public void enterFirstNameInInfo(String fName){
        log.info("enter the 'FIRST NAME' : " + fName + " to first name field");
        sendTextToElement(infoFirstNameField,fName);
    }
    public void enterlastNameInInfo(String lName){
        log.info("enter the 'LAST NAME' : " + lName + " to last name field");
        sendTextToElement(infoLastNameField,lName);
    }
    public void enterPasswordInInfo(String password){
        log.info("enter the 'PASSWORD' : " + password + " to password field");
        sendTextToElement(infoPassWordField,password);
    }

    public void enterAddress(String address){
        log.info("enter the 'ADDRESS' : " + address + " to address field");
        sendTextToElement(addressField,address);
    }
    public void enterCity(String city ){
        log.info("enter the 'CITY' : " + city + " to city field");
        sendTextToElement(cityField,city);
    }

    public void selectStateFromDropDown(String text){
        log.info("select 'STATE' from drop down : " + text);
        selectByVisibleTextFromDropDown(stateDropDownField,text);
    }
    public void enterZipCode(String code){
        log.info("enter the 'ZIP CODE' : " + code + " to zipcode field");
        sendTextToElement(zipCodeField,code);
    }

    public void selectCountryFromDropDown(String country){
        log.info("select 'COUNTRY' from drop down : " + country);
        selectByVisibleTextFromDropDown(countryDropDownField,country);
    }
    public void enterMobilePhone(String mobileNum){
        log.info("select 'MOBILE NUMBER' from drop down : " + mobileNum);
        sendTextToElement(mobileNumberField,mobileNum);
    }
    public void enterAliasAddress(String add){
        log.info("enter the 'ALIAS ADDRESS' : " + add + " to zipcode field");
        sendTextToElement(addressAliasField,add);
    }
    public void clickOnRegisterButton(){
        log.info("click on 'REGISTRATION' button : " + registerButton.toString());
        clickOnElement(registerButton);
    }

    public String getMyAccountText() {
        log.info("get the text of 'MY ACCOUNT' link : "+ myAccountText.toString());
        return getTextFromElement(myAccountText);
    }
    public Boolean signOutLinkDisplayed(){
        log.info("get the text of 'SIGN OUT' link : "+ signOutLink.toString());
        return signOutLink.isDisplayed();
    }
    public void clickOnSignOutLink(){
        log.info("click on 'SIGN OUT' button : " + signOutLink.toString());
        clickOnElement(signOutLink);
    }







































}
