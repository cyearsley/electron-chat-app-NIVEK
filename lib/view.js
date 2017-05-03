var fs = require('fs');
var path = require('path');
var hb = require('handlebars');

var view = function (viewName) {
    var templatePath = path.join(__dirname, '../views', viewName + '.hbs');
    var source = fs.readFileSync(templatePath, 'utf-8');
    var template = hb.compile(source);

    this.toHtml = function (data) {
        return template(data);
    };
};

module.exports = view;
