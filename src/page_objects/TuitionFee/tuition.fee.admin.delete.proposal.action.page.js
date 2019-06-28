'use strict';

const expect = require('@helper/expect').expect;
const commonPage = require('@page_objects/common.page');

const TuitionFeeAdminDeleteProposalActionPage = function() {
    
    // locators
    const approveButton = element(by.xpath('//*[@id="main-content"]/div/form/input[8]'));
    const rejectButton = element(by.xpath('//*[@id="main-content"]/div/form/input[7]'));
    var EC = protractor.ExpectedConditions;
    const deleteProposal = element(by.xpath(' //*[@id="main-content"]/div/h3'));

    // functions
        this.buttonExists = function (buttonName){  
            commonPage.buttonExists(buttonName,'.btn');
            
           // EC.textToBePresentInElementValue($('.btn-sub'), buttonName);
        }
        
        this.approve = function () {       
           approveButton.click();
        }
        this.reject = function () {       
           rejectButton.click();
        }        
    
        this.assertHeading = function(heading) {
            expect(deleteProposal.getText()).to.eventually.equal(heading);
        }
};

module.exports = new TuitionFeeAdminDeleteProposalActionPage();


