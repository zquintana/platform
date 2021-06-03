#!/usr/bin/env node

'use strict';

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const fs = require('fs').promises;
const faker = require('faker');
const argv = yargs(hideBin(process.argv)).argv

const main = async () => {
    const total = argv.total || 100;
    for (let i = 0; i < total; i++) {
        await fs.appendFile(argv.outputPath || './names.txt', `${faker.name.findName()}\n`);
    }
}

if (require.main === module) {
    (async () => await main())();
}
