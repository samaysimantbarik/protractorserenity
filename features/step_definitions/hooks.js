'use strict';

module.exports = function hooks() {
    
    this.Before(function () {
        
        browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization = true;
        browser.get(browser.params.baseUrl);
        // browser.manage().window().maximize();

    });

    this.After(function () {

       browser.manage().deleteAllCookies();
       
    });

};