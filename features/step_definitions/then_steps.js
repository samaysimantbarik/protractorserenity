'use strict';

const tuitionFeeSettingPage = require('@page_objects/TuitionFee/tuition.fee.setting.page');
const commonPage = require('@page_objects/common.page');
const tuitionFeeApprovalPage = require('@page_objects/TuitionFee/tuition.fee.approval.page');
const tuitionFeeAdminNewProposalActionPage = require('@page_objects/TuitionFee/tuition.fee.admin.new.proposal.action.page');
const tuitionFeeAdminDeleteProposalActionPage = require('@page_objects/TuitionFee/tuition.fee.admin.delete.proposal.action.page');
const threeYearPlanPage = require('@page_objects/SLP/slp.three.year.plan.page');


module.exports = function thenSteps() {

    this.Then(/^Actual Percentage is calculated is "([^"]*)"$/, function (actualIncreasePercent) {

        tuitionFeeSettingPage.assertActualIncrease(actualIncreasePercent);
        
      });
      
    this.Then(/^"([^"]*)" heading is displayed$/, function (expectedEftslColumn) {

        tuitionFeeSettingPage.assertEftslColumn(expectedEftslColumn);
        
      });
      
    this.Then(/^the Tuition Fee Setting Admin page is displayed$/, function () {
        tuitionFeeApprovalPage.headingExists("Tuition Fee Setting Administration");
    });
    
    this.Then(/^the "([^"]*)" modal is displayed$/, function (modalName) {
        commonPage.modalDisplay(modalName);
    });
    
    this.Then(/^"([^"]*)" button exists$/, function (buttonName) {
        tuitionFeeSettingPage.buttonExists(buttonName);
    });
    
    this.Then(/^Tuition Fee Setting Administration for New Proposals page is loaded$/, function () {   
        tuitionFeeAdminNewProposalActionPage.assertHeading("New Proposals")
    });
    this.Then(/^Tuition Fee Setting Administration for Delete Proposals page is loaded$/, function () {   
        tuitionFeeAdminDeleteProposalActionPage.assertHeading("Proposed Deletions")
    });    
    
    this.Then(/^"([^"]*)" action button exists$/, function (buttonName) {
        tuitionFeeAdminNewProposalActionPage.buttonExists(buttonName);
    });
    this.Then(/^"([^"]*)" delete action button exists$/, function (buttonName) {
        tuitionFeeAdminDeleteProposalActionPage.buttonExists(buttonName);
    });    
    
    this.Then(/^I should be able to edit all fields except faculty comment field$/, function () {
        tuitionFeeAdminNewProposalActionPage.assertEditableFields();
    });

    this.Then(/^I should be on the 3 Year Plan page$/, function () {
        threeYearPlanPage.assertPageTitle();
    });

    this.Then(/^I receive an alert stating I have unsaved data$/, function () {
        threeYearPlanPage.assertAlertText();
    });

    this.Then(/^The 3 year plan page for "([^"]*)" is displayed$/, function (readOnlyFaculty) {
        threeYearPlanPage.assertFacultyPage(readOnlyFaculty);
    });

    this.Then(/^new proposals history heading is visible$/, function () {
        tuitionFeeApprovalPage.historyExists();
    });
};

