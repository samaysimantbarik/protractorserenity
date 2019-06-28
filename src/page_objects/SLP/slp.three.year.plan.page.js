'use strict';

const expect = require('@helper/expect').expect;

const ThreeYearPlanPage = function() {

    // locators
    const documentRepositoryLink = element(by.linkText('Document Repository'));
    const saveButton = element(by.id("saveButton"));
    const projectionTextBox = element(by.id("New-UGRD-INTL-projectionYear1"));
    const commentButton = element(by.id("commentsTop"));
    const commentTextArea = element(by.id("comments-area"));
    const saveCommentsButton = element(by.id("comments-save"));
    const threeYearPlanPageTitle = element(by.xpath('//*[@id="main-content"]/div/h2'));
    const cancelCommentsButton = element(by.id("comments-close"));
    const sideBarButton = element(by.xpath('//*[@id="side-left"]/button'));
    const facultyDropDown = element(by.id("uac_side_bar_faculties"));
    const goButton = element(by.xpath('//*[@id="slp-tools"]/ul/li/button'));
    const facultyTitle = element(by.xpath("//*[@id='main-content']/div/h3"));
    var EC = protractor.ExpectedConditions;

    // functions
    this.assertPageTitle = function(){

        expect(threeYearPlanPageTitle.getText()).to.eventually.equal("3 Year Plan");

    }

    this.updateProjection = function () {

        projectionTextBox.clear();
        projectionTextBox.sendKeys(Math.floor(Math.random() * 100));

    }

    this.assertAlertText = function(){


        browser.wait(EC.alertIsPresent(), 5000);
        browser.switchTo().alert().accept();

    }


    this.writeComment = function(comment3YearPlan) {

        commentButton.click();
        browser.wait(EC.elementToBeClickable(commentTextArea), 4000,"Custom Error Message");
        commentTextArea.click();
        browser.sleep(200);
        commentTextArea.clear();
        browser.sleep(200);
        commentTextArea.sendKeys(comment3YearPlan);
        browser.sleep(200);

    }

    this.checkCommentIsPresent = function(comment3YearPlan) {

        browser.wait(EC.elementToBeClickable(commentButton), 10000,"Custom Error Message");
        browser.sleep(500);
        browser.executeScript("arguments[0].click();",commentButton);
       // commentButton.click();
        browser.wait(EC.elementToBeClickable(commentTextArea), 4000,"Custom Error Message");
        commentTextArea.click();
        expect(commentTextArea.getText()).to.eventually.include(comment3YearPlan);
        this.cancelComment();
    }

    this.saveComment = function(){

        saveCommentsButton.click();

    }

    this.cancelComment = function(){

        cancelCommentsButton.click();
    }

    this.selectReadOnlyFaculty = function(readOnlyFaculty){

        sideBarButton.click();
        browser.wait(EC.visibilityOf(goButton),10000,"error");
        //FIX THIS - check how selection can be done by the name "readOnlyFaculty" ????
        facultyDropDown.$('[value="SCI"]').click();
        goButton.click();
        browser.wait(EC.invisibilityOf(facultyDropDown), 10000, "error");

    }

    this.assertFacultyPage = function(readOnlyFaculty){

        this.assertPageTitle();
        expect(facultyTitle.getText()).to.eventually.equal(readOnlyFaculty);

    }

    this.checkReadOnlyAccess  = function(){
           expect(projectionTextBox.getAttribute('readonly')).to.be.eventually.equal('true');
    }


};

module.exports = new ThreeYearPlanPage();