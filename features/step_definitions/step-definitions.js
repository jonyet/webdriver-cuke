var expect = require('chai').expect;

module.exports = function(){

    this.Given(/^I am on the homepage for "([^"]*)"$/, function(url) {
        browser.url('http://www.' + url + '.com');
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

};
