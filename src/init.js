let mongoose = require('mongoose');
let driPortalInit = require('./driPortalInit');
let driPortalImport = require('./driPortalImport');
let Utils = require('./utils');

let args = process.argv.slice(2);
let db = Utils.createConnection(args[0], args[1]);

driPortalInit(db);
driPortalImport(db);
