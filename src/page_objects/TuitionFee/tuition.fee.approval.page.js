'use strict';
 
const expect = require('@helper/expect').expect;
 
const TuitionFeeApprovalPage = function() {
     
    // locators
    const approvalHeading = element(by.id("main-heading"));
    
    //const approvalHeading = element(by.xpath('//*[@id="main-heading"]'));
    
    const actionNewProposalButton =  element(by.xpath('//*[@id="newtable"]/tbody/tr[1]/td[8]/a'));  
    const actionDeleteProposalButton =  element(by.xpath('//*[@id="deletetable"]/tbody/tr[1]/td[8]/a'));
    
    const historyLink = element(by.xpath('//*[@id="headingOne"]/h4/a'));
    
    const yearDropDown = element(by.xpath('//*[@id="year-select-proposal"]'));
 
    const historyHeading = element(by.xpath(' //*[@id="collapseOne"]/div/h3[1]'));
    // functions
    this.headingExists = function () {
 
        expect(approvalHeading.getText()).to.eventually.equal("Tuition Fee Setting Administration");
 
    };
    
    this.clickActionNewProposalButton = function () {       
       actionNewProposalButton.click();
    };

    this.clickActionDeleteProposalButton = function () {       
       actionDeleteProposalButton.click();
    };       
    
    this.clickHistoryLink = function () {
        historyLink.click();
    };
    
    this.historyExists = function () {
       
        expect(historyHeading.getText()).to.eventually.equal("New Proposals History");
        
    };
};
 
module.exports = new TuitionFeeApprovalPage();

