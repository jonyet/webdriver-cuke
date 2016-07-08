var page = require('./page.js');

var Homepage = Object.create(page, {
    /**
     * define elements
     */
    clientProfile: { get: function () { return browser.element('#u_0_2 > div:nth-child(1) > div:nth-child(1) > div > a > span'); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this)
    } }
});

module.exports = Homepage
