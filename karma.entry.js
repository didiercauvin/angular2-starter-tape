require('reflect-metadata');
require('zone.js');

const context = require.context('./src/tests/', true, /\.ts$/);

context.keys().forEach(context);

Error.stackTraceLimit = Infinity;