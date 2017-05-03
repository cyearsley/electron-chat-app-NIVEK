var emitter = require('events').EventEmitter;
var util = require('util');
var path = require('path');
var fs = require('fs');
var View = require('./view');

var app = function () {
    this.on('view-selected', function (viewName) {
        var view = new View(viewName);
        this.emit('rendered', view.toHtml());
    });
};

util.inherits(app, emitter);
module.exports = new app();
