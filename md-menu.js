var fs = require('fs');

var args = process.argv.slice(2);
var options = {};

// Parse options if it exist (e.g. --source='custom.md')
args.length && args.forEach(function(option) {
    var optionArr = option.split('=');
    options[optionArr[0].replace('--', '')] = optionArr[1];
});

Object.prototype.merge = function(obj) {
    if (typeof obj !== 'object') return;

    for (var prop in obj) {
        if (this.hasOwnProperty(prop) &&
            obj.hasOwnProperty(prop)) {
            this[prop] = obj[prop];
        }
    }

    return this;
};

var config = {
    source: 'styleguide.md',
    destination: 'README.md',
    cascade: 'true',
    firstLevel: 2,
    menuTitle: '## Table of Contents',
    placeholder: '<!--mdMenu-->'
};

config.merge(options);

fs.readFile(config.source, function(err, data) {
    if (err) throw err;

    // Matches to all headers in document (by default: /#{2,6}\s.+/g)
    var headerRegexp = new RegExp('#{' + config.firstLevel + ',6}\\s.+', 'g');
    // todo: check this regexp if more than 1 menu are on a page
    // Matches to placeholders with/without menu (by default: /<!--mdMenu-->[\s\S]*<!--mdMenu-->/)
    var menuRegexp = new RegExp(config.placeholder + '[\\s\\S]*' + config.placeholder);

    var content = data.toString();
    var headersArr = content.match(headerRegexp);
    var br = '\r\n';
    var menu;
    var res;

    if (headersArr === null || !headersArr.length) {
        console.log('No headers were found.');
        return;
    }

    menu = headersArr
        // Remove title of menu from menu (config.menuTitle)
        .filter(function (header) {
            return header !== config.menuTitle;
        })
        // Getting md links
        .map(function(header) {
            var tabs = '';
            var link;

            if (config.cascade === 'true') {
                // Detect level of header
                var level = (header.match(/#/g) || []).length;
                // Save tabs if needed
                tabs = new Array(level - config.firstLevel + 1).join('\t') + '* ';
            }

            // Normalize header
            header = header.replace(/#{1,6}\s/g, '').trim();
            // Create links like md parser does
            link = '#' + header.replace(/[&\/]/g, '').replace(/\s/g, '-').toLowerCase();

            return tabs + '[' + header + '](' + link + ')';
        })
        // Concat
        .join('\r\n');

    if (config.menuTitle) {
        menu = config.placeholder + br + config.menuTitle + br + menu + br + br + config.placeholder;
    } else {
        menu = config.placeholder + br + menu + br + br + config.placeholder;
    }

    // If no placeholders - paste in the beginning of document
    if (content.indexOf(config.placeholder) !== -1) {
        res = content.replace(menuRegexp, menu);
    } else {
        res = menu + br + br + content;
    }

    fs.writeFile(config.destination, res, function (err) {
        if (err) throw err;

        console.log('Menu was built.');
    });
});