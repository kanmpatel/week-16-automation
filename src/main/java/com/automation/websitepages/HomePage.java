package com.automation.websitepages;

import com.automation.utility.Utilites;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class HomePage extends Utilites {

    public static final Logger log = LogManager.getLogger(HomePage.class);

    public HomePage() {
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(xpath = "//a[@title='Women']")
    WebElement womenTab;
    @CacheLookup
    @FindBy(xpath = "//header/div[3]/div[1]/div[1]/div[6]/ul[1]/li[2]/a[1]")
    WebElement dressesTab;
    @CacheLookup
    @FindBy(xpath = "//li[@class='sfHover']//a[@title='T-shirts'][normalize-space()='T-shirts']']")
    WebElement tshirtTab;
    @CacheLookup
    @FindBy(xpath = "//a[@title='Log in to your customer account']")
    WebElement signInLink;

    @CacheLookup
    @FindBy(xpath = "//header/div[3]/div[1]/div[1]/div[6]/ul[1]/li/a")
    List<WebElement> listOfTab;

    public void clickOnTopMenuTab(String menu) throws InterruptedException {
        for(WebElement element : listOfTab){
            if(element.getAttribute("title").equalsIgnoreCase(menu)){
                element.click();
                break;
            }
        }
    }


    public void clickOnWomanTab(){
        log.info("clicking On 'WOMEN' link tab : "+ womenTab.toString());
        clickOnElement(womenTab);
    }
    public void clickOnDressesTab(){
        log.info("clicking On 'DRESSES' link tab : "+ dressesTab.toString());
        clickOnElement(dressesTab);
    }
    public void clickOnTshirtTab(){
        log.info("clicking On 'TSHIRT' link tab : "+ tshirtTab.toString());
        clickOnElement(tshirtTab);
    }
    public void clickOnSignInLink(){
        log.info("clicking On 'SIGNIN' link : "+ signInLink.toString());
        clickOnElement(signInLink);
    }
    public boolean signInLinkDisplayed(){
        log.info("get the text of 'SIGNIN' link : "+ signInLink.toString());
        return signInLink.isDisplayed();
    }







}
