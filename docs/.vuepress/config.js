const { version, name } = require('../../package');

const parts = name.split('/');

module.exports = {
    title: `Version ${version}`,
    base: `/${parts[parts.length - 1]}/`
}
