var page = require('./page.js');

var Homepage = Object.create(page, {
    /**
     * define elements
     */
    user: { get: function () { return browser.element('#email'); } },
    pass: { get: function () { return browser.element('#pass'); } },
    submit: { get: function () { return browser.element('#u_0_o'); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this)
    } }
});

module.exports = Homepage
