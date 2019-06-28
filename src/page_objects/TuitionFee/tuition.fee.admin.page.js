'use strict';

const TuitionFeeAdminPage = function() {
    
    // locators
        const proposalApprovalButton = element(by.xpath("//*[@id='approval']"));
        
        //const actionNewProposalButton =  element(by.xpath('//*[@id="newtable"]/tbody/tr[1]/td[8]/a'));
        
       // const actionDeleteProposalButton =  element(by.xpath('//*[@id="deletetable"]/tbody/tr[1]/td[8]/a'));
        
        //const actionButton = element(by.linkText('Action'));

    // functions
	this.goToApprovalAdmin = function () {

        proposalApprovalButton.click();

	}
        /*
        this.clickActionNewProposalButton = function () {       
           actionNewProposalButton.click();
        }
    
        this.clickActionDeleteProposalButton = function () {       
           actionDeleteProposalButton.click();
        }    
        */
};

module.exports = new TuitionFeeAdminPage();

