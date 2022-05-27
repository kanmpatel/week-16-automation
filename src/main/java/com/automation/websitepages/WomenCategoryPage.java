package com.automation.websitepages;

import com.automation.utility.Utilites;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class WomenCategoryPage extends Utilites {
    public static final Logger log = LogManager.getLogger(WomenCategoryPage.class);
    public WomenCategoryPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//h2[@class='title_block']")
    WebElement womanText;
    @CacheLookup
    @FindBy(xpath = "//div[@class='block_content']//a[normalize-space()='Tops']")
    WebElement topLink;
    @CacheLookup
    @FindBy(xpath = "//div[@class='block_content']//a[contains(@title,'Find your favorites dresses from our wide choice of evening, casual or summer dresses!')][normalize-space()='Dresses']")
    WebElement dressesLink;
    @CacheLookup
    @FindBy(id = "selectProductSort")
    WebElement shortByDropDown;
    @CacheLookup
    @FindBy(xpath = "//h5[@itemprop=\"name\"]/child::a[@class=\"product-name\"]")
    List<WebElement> productLists;


    public String getVerifyWomenText() {
        log.info("get the text of 'WOMEN' : "+ womanText.toString());
        return getTextFromElement(womanText);
    }
    public void clickOnTopsLink() {
        log.info("click on 'TOP' link : "+ topLink.toString());
        clickOnElement(topLink);
    }
    public void clickOnDressesLink() {
        log.info("click on 'DRESSES' link : "+ dressesLink.toString());
        clickOnElement(dressesLink);
    }
    public void clickOnShortByDropDown() {
        log.info("select the filter 'SHROT BY' from drop down : "+ shortByDropDown.toString());
        clickOnElement(shortByDropDown);
    }
    public void clickOnProduct(String productName) {
        for(WebElement element : productLists){
            if(element.getText().equalsIgnoreCase(productName)){
                log.info("click on 'PRODUCT' : "+ productName);
                element.click();
                break;
            }
        }
    }



}


