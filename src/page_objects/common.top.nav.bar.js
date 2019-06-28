'use strict';

const CommonTopNavBar = function() {
    
    // locators
    const tuitionFeeSettingLink = element(by.linkText('Tuition Fee Setting'));
    const tuitionFeeAdminLink = element(by.linkText('Administration'));
    const threeyearPlanLink = element(by.linkText('3 Year Plan'));
    const homeLink = element(by.xpath('//a[@title="Home"]'));


    // functions
	this.clickMenuByText = function (menuText) {

        element(by.linkText(menuText)).click;

	}
	
	this.navigateToTuitionFeeSetting = function () {

        tuitionFeeSettingLink.click();
    
    }
    
    	this.navigateToTuitionFeeAdmin = function () {

        tuitionFeeAdminLink.click();
    
    }

    this.navigateToThreeYearPlan = function () {

        threeyearPlanLink.click();

    }

    this.navigateToHome = function() {

        homeLink.click();

    }


};

module.exports = new CommonTopNavBar();