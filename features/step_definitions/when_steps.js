'use strict';

const tuitionFeeSettings = require('@page_objects/TuitionFee/tuition.fee.setting.page');
const whereWouldYouLikeToGoPage = require('@page_objects/where.would.you.like.to.go.page');
const commonTopNavBar = require('@page_objects/common.top.nav.bar');
const tuitionFeeAdmin = require('@page_objects/TuitionFee/tuition.fee.admin.page');
const tuitionFeeApproval = require('@page_objects/TuitionFee/tuition.fee.approval.page');
const commonPage = require('@page_objects/common.page');
const threeYearPlanPage = require('@page_objects/SLP/slp.three.year.plan.page');



module.exports = function whenSteps() {

    this.When(/^I change the percentage value to "([^"]*)"$/, function (updatedPercent) {

        tuitionFeeSettings.enterIncreasePercentage(updatedPercent);

    });
  
    this.When(/^I click Tuition Fee Approvals Enter section button$/, function () {
         tuitionFeeAdmin.goToApprovalAdmin();
    });
    
    this.When(/^I click on the "([^"]*)" button$/, function (buttonName) {
         commonPage.clickButton(buttonName);
    });

    this.When(/^I click on new proposal action button$/, function () {
         tuitionFeeApproval.clickActionNewProposalButton();      
    });
    
    this.When(/^I click on delete proposal action button$/, function () {
         tuitionFeeApproval.clickActionDeleteProposalButton();
    });

    this.When(/^I click the Save and Close button$/, function () {
        threeYearPlanPage.saveComment();
    });
    this.When(/^I navigate Home$/, function () {
        commonTopNavBar.navigateToHome();
    });

    this.When(/^I search for a faculty which is not my own "([^"]*)"$/, function (readOnlyFaculty) {
        threeYearPlanPage.selectReadOnlyFaculty(readOnlyFaculty);
    });
    
    this.When(/^I click on history link$/, function () {
         tuitionFeeApproval.clickHistoryLink();      
    });

};
