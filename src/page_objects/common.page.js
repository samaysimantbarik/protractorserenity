'use strict';

const CommonPage = function() {
    
    var EC = protractor.ExpectedConditions;
    // functions
    
        this.clickButton = function (buttonName){
            element(by.id(buttonName)).click();
        }
        
        this.modalDisplay = function (modalName){
            browser.wait(EC.visibilityOf(element(by.id(modalName))), 500);
        }
        
        this.buttonExists = function (buttonName, className){            
            EC.textToBePresentInElementValue($(className), buttonName);
        }
        
};

module.exports = new CommonPage();