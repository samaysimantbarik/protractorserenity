'use strict';

const LoginPage = function(){

    // locators
    // make these locators only visible to this function
    // naming convention should be <textOnScreen><htmlTag>
    const UsernameInput = element(by.id('username'));
    const PasswordInput = element(by.id('password'));
    const SignOnButton = element(by.id('login'));

    // functions
    // expose these functions to the global window
    this.logIntoSLP = function (uname, pword) {

        UsernameInput.sendKeys(uname);
        PasswordInput.sendKeys(pword);
        SignOnButton.click();

	}
	
    this.logIntoSlpAsDVCA = function () {

        this.logIntoSLP(browser.params.dvca.username, browser.params.dvca.password);
    
    }

    this.logIntoSlpAsSLPEdituser = function () {

        this.logIntoSLP(browser.params.slpEditUser.username, browser.params.slpEditUser.password);

    }

};

module.exports = new LoginPage();