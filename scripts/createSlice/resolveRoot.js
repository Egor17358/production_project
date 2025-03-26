// eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
const path = require('path');

// eslint-disable-next-line no-undef
module.exports = (...segments) => path.resolve(__dirname, '..', '..', ...segments)
