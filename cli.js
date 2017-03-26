#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const emphasize = require('emphasize');

const filePath = process.argv[2];
if (!filePath) {
    console.error('USAGE: c filename.ext');
    process.exit(1);
}
const resolvedPath = path.resolve(process.cwd(), filePath);

const doc = fs.readFileSync(resolvedPath, 'utf8');
const output = emphasize.highlightAuto(doc).value;

process.stdout.write(output);
