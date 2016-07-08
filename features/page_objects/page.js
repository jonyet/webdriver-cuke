function Page () {
}

Page.prototype.open = function (path) {
    browser.url('http://www.facebook.com/');
}

module.exports = new Page();
