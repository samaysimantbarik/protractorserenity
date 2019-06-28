'use strict';

require('module-alias/register');
const loginPage = require('@page_objects/login.page');
const whereWouldYouLikeToGoPage = require('@page_objects/where.would.you.like.to.go.page');
const commonTopNavBar = require('@page_objects/common.top.nav.bar');
const tuitionFeeAdmin = require('@page_objects/TuitionFee/tuition.fee.admin.page');
const tuitionFeeApproval = require('@page_objects/TuitionFee/tuition.fee.approval.page');
const threeYearPlanPage = require('@page_objects/SLP/slp.three.year.plan.page');



module.exports = function givenSteps() {

    this.setDefaultTimeout(90 * 1000);
    
    this.Given(/^I am a Tuition Fee Edit User$/, function () {

        loginPage.logIntoSlpAsDVCA();
        
    });

    this.Given(/^I am on the Tuition Fee Setting page$/, function () {

        whereWouldYouLikeToGoPage.goToTuitionFee();
        commonTopNavBar.navigateToTuitionFeeSetting();

    });

    this.Given(/^I am a DVCA User$/, function () {

        loginPage.logIntoSlpAsDVCA();
        
    });
    
    this.Given(/^I am a SLP Faculty User$/, function () {

        loginPage.logIntoSlpAsSLPEdituser();

    });
    
    this.Given(/^I am on the Tuition Fee Admin page$/, function () {

        whereWouldYouLikeToGoPage.goToTuitionFee();
        commonTopNavBar.navigateToTuitionFeeAdmin();

    });
    
    this.Given(/^I am on the Tuition Fee Administration Proposal page$/, function () {

        whereWouldYouLikeToGoPage.goToTuitionFee();
        commonTopNavBar.navigateToTuitionFeeAdmin();
        tuitionFeeAdmin.goToApprovalAdmin();

    });
    
    this.Given(/^I am on Tuition Fee Setting Administration for New Proposals page$/, function () {

        whereWouldYouLikeToGoPage.goToTuitionFee();
        commonTopNavBar.navigateToTuitionFeeAdmin();
        tuitionFeeAdmin.goToApprovalAdmin();
        tuitionFeeApproval.clickActionNewProposalButton();

    });
 
      this.Given(/^I am on Tuition Fee Setting Administration for Proposed Deletions page$/, function () {

        whereWouldYouLikeToGoPage.goToTuitionFee();
        commonTopNavBar.navigateToTuitionFeeAdmin();
        tuitionFeeAdmin.goToApprovalAdmin();
        tuitionFeeApproval.clickActionNewProposalButton();

    });


    this.Given(/^I am on 3 Year Plan page$/, function () {

        whereWouldYouLikeToGoPage.goToStudentLoadPlanning();
        commonTopNavBar.navigateToThreeYearPlan();

    });

    this.Given(/^I have modified the projection to any random value$/, function () {

        threeYearPlanPage.updateProjection();
    });

    this.Given(/^I enter a comment "([^"]*)" in the comment modal$/, function (comment3YearPlan) {

        threeYearPlanPage.writeComment(comment3YearPlan);

    });

    this.Given(/^I can see the comment "([^"]*)" is present in the modal$/, function (comment3YearPlan) {

        threeYearPlanPage.checkCommentIsPresent(comment3YearPlan);

    });

    this.Given(/^3 Year Plan page is read only$/, function () {

        threeYearPlanPage.checkReadOnlyAccess();

    });

   };
