require('dotenv').config();
var expect = require('chai').expect;
var Login = require('../page_objects/fbLogin.js');
var Home = require('../page_objects/fbHome.js');

module.exports = function(){

    this.Given(/^I am on the homepage for "([^"]*)"$/, function(url) {
      (url === 'facebook') ? Home.open() : browser.url('http://www.' + url + '.com');
      browser.setViewportSize({width: 1440, height: 1600}, true);
    });

    this.When(/^I search for "([^"]*)"$/, function(searchText) {
      browser.click('#twotabsearchtextbox');
      browser.keys(searchText);
      browser.click('#nav-search > form > div.nav-right > div > input');
    });

    this.Then(/^I am shown a positive number of results$/, function(expectedTitle) {
      browser.waitForExist('#s-result-count');
      browser.waitForVisible('#s-result-count');
      var results = browser.getText('#s-result-count');
      var integers = results.split(" ").filter(function(int) {
        return int.match(/\d+/g);
      });
      var cleanInteger = integers[1].replace(/,/g, "");
      expect(parseInt(cleanInteger)).to.be.above(0);
    });

    this.When(/^I fill out the login form as "([^"]*)"$/, function(client) {
      if (client === 'jterry'){
        var user = process.env.JT_USER
        var pass = process.env.JT_PASS
      };
      Login.user.waitForExist();
      Login.user.waitForVisible();
      Login.user.click();
      Login.user.keys(user);
      Login.pass.click();
      Login.pass.keys(pass);
    });

    this.Then(/^I click login and see my feed$/, function(expectedTitle) {
      Login.submit.click();
      Home.clientProfile.waitForExist();
      Home.clientProfile.waitForVisible();
      expect(Home.clientProfile.getText()).to.be.equal('Jonathan');
    });

};
