#!/usr/bin/env node

const fs = require('fs');
const emphasize = require('emphasize');

const doc = fs.readFileSync('./package.json', 'utf8');
const output = emphasize.highlightAuto(doc).value;

process.stdout.write(output);

