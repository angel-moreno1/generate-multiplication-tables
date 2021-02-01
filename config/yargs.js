const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('list', 'Prints the multiplication table to the console', opts)
    .command('create', 'Generates a file with the multiplication table', opts)
    .help()
    .argv;

module.exports = {
    argv
}