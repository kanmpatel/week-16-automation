package com.automation.websitepages;

import com.automation.utility.Utilites;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class DressesPage extends Utilites {
    public static final Logger log = LogManager.getLogger(DressesPage.class);
    public DressesPage() {
        PageFactory.initElements(driver,this);
    }

    @CacheLookup
    @FindBy(xpath = "//div[@id='categories_block_left']/descendant::a")
    List<WebElement> casualDressesLinkTab;

    @CacheLookup
    @FindBy(xpath = "//a[@class=\"product-name\"]")
    List<WebElement> productList;

    public void SelectCasualDressLinkTab(String productListName){
        for(WebElement element : casualDressesLinkTab){
            if(element.getText().equalsIgnoreCase(productListName)){
                element.click();
                break;
            }
        }
    }

    public void SelectProduct(String productListName){
        for(WebElement element : productList){
            if(element.getText().equalsIgnoreCase(productListName)){
                element.click();
                break;
            }
        }
    }
}
