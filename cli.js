#!/usr/bin/env node

// I used to do this with pygmentize, but depending on Pygments/easy_install/pip was getting annoying.
//     sudo easy_install -U Pygments
//     alias c='pygmentize -O style=monokai -f console256 -g'
// Performance-wise they appear to be pretty much the same.

const fs = require('fs');

const emphasize = require('emphasize');

const filePath = process.argv[2];
if (!filePath) {
    console.error('USAGE: c filename.ext');
    process.exit(1);
}

const doc = fs.readFileSync(filePath, 'utf8');
const output = emphasize.highlightAuto(doc).value;

process.stdout.write(output);
