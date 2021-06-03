const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const fs = require('fs').promises;
const inputScorer = require('./lib/inputScorer');

const readFile = async (file) => {
    const contents = await fs.readFile(file);

    return contents.toString().split("\n").filter(value => value.length > 0);
};

const handler = async (argv) => {
    const names = await readFile(argv.namesFile);
    const addresses = (await readFile(argv.streetAddressFile));

    const values = inputScorer(addresses, names);
    values.forEach(match => console.log(`SS: ${match.driver.score} == ${match.address} -> ${match.driver.name}`));
};

yargs(hideBin(process.argv))
    .command('$0 [streetAddressFile] [namesFile]', 'Process scores', (yargs) => {
        return yargs
            .positional('streetAddressFile', {
                describe: 'Street address file path',
                default: './addresses.txt',
            })
            .positional('namesFile', {
                describe: 'Names file path',
                default: './names.txt',
            })
        ;
    }, handler).argv;
