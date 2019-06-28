'use strict';

const expect = require('@helper/expect').expect;
const commonPage = require('@page_objects/common.page');

const TuitionFeeSettingPage = function() {
    
    
    // locators
    const increasePercentageInput = element(by.xpath('//input[starts-with(@id, "tuition_fee_TuitionFee_row_")]'));
    const saveButton = element(by.id("tuition-save-bottom"));
    const actualIncreaseText = element(by.xpath("//td[contains(@id, 'actualIncrease')]"));
    const eftslColumn = element(by.xpath("//th[contains(text(), ' EFTSL')]"));
    var EC = protractor.ExpectedConditions;
    // functions
	this.enterIncreasePercentage = function (increaseValue) {

        increasePercentageInput.clear();      
        increasePercentageInput.sendKeys(increaseValue);
        saveButton.click();

	}
	
	this.assertActualIncrease = function(expectedIncreaseValue){

        expect(actualIncreaseText.getText()).to.eventually.equal(expectedIncreaseValue);

        }
        
        this.assertEftslColumn = function(expectedEftslColumn) {
            expect(eftslColumn.getText()).to.eventually.equal(expectedEftslColumn);
        }
        
        this.buttonExists = function (buttonName){  
            commonPage.buttonExists(buttonName,'.deleteproposal');
            
            //EC.textToBePresentInElementValue($('.deleteproposal'), buttonName);
        }
};

module.exports = new TuitionFeeSettingPage();