'use strict';

const expect = require('@helper/expect').expect;
const commonPage = require('@page_objects/common.page');

const TuitionFeeAdminNewProposalActionPage = function() {
    
    // locators
    const approveButton = element(by.xpath('//*[@id="main-content"]/div/form/input[5]'));
    const rejectButton = element(by.xpath('//*[@id="main-content"]/div/form/input[4]'));
    const cancelButton = element(by.xpath('//*[@id="main-content"]/div/form/input[3]'));
    const program = element(by.xpath('//*[@id="fee_proposal_program"]'));
    const comment = element(by.xpath('//*[@id="fee_proposal_comment"]'));
    const dvcaComment = element(by.xpath('//*[@id="fee_proposal_dvcaComment"]'));
    const fee = element(by.xpath('//*[@id="fee_proposal_fee"]'));
    const fundingGroup = element(by.xpath('//*[@id="fee_proposal_fundingGroup"]'));
    const career = element(by.xpath('//*[@id="fee_proposal_career"]'));
    const programType = element(by.xpath('//*[@id="fee_proposal_programType"]'));
    
    var EC = protractor.ExpectedConditions;
    const newProposal = element(by.xpath(' //*[@id="main-content"]/div/h3'));

    // functions
        this.buttonExists = function (buttonName){  
            commonPage.buttonExists(buttonName,'.btn-sub');
            
           // EC.textToBePresentInElementValue($('.btn-sub'), buttonName);
        };
        
        this.approve = function () {       
           approveButton.click();
        };
        
        this.reject = function () {       
           rejectButton.click();
        };
        
        this.cancel = function () {       
           cancelButton.click();
        };          

        this.assertHeading = function(heading) {
            expect(newProposal.getText()).to.eventually.equal(heading);
        };
        
        this.assertEditableFields =  function() {
            expect(program.getAttribute('readonly')).not.to.be.eventually.equal('readonly');
            expect(dvcaComment.getAttribute('readonly')).not.to.be.eventually.equal('readonly');
            expect(comment.getAttribute('readonly')).to.be.eventually.equal('true');
            expect(fee.getAttribute('readonly')).not.to.be.eventually.equal('readonly');
            expect(fundingGroup.getAttribute('disabled')).to.be.eventually.equal(null);
            expect(career.getAttribute('disabled')).to.be.eventually.equal(null);
            expect(programType.getAttribute('disabled')).to.be.eventually.equal(null);
        };
};

module.exports = new TuitionFeeAdminNewProposalActionPage();

