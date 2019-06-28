'use strict';

const WhereWouldYouLikeToGo = function() {
    
    // locators
    const studentLoanPlanningLink = element(by.linkText('Student Load Planning'));
    const admissionsLink = element(by.linkText('Admissions'));
    const tuitionFeeLink = element(by.xpath("//a[@href='/fee']"));

    // functions
	this.goToStudentLoadPlanning = function () {

        studentLoanPlanningLink.click();

	}
	
	this.goToAdmissions = function () {

        admissionsLink.click();

    }
    
    this.goToTuitionFee = function () {

	    //browser.sleep(200);
        //tuitionFeeLink.click();
        browser.executeScript("arguments[0].click();",tuitionFeeLink);

	}
    
};

module.exports = new WhereWouldYouLikeToGo();