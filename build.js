const mustache = require('mustache');
const me = require('./src/me.js');
const fs = require('fs');
 
let template = fs.readFileSync('src/index.template.html', 'utf8');

let html = mustache.render(template, me);

fs.writeFileSync('index.html', html, 'utf8');