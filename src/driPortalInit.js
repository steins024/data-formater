let _ = require('lodash');

let Utils = require('./utils');
let initDataArray = require('./data/initData.js')

module.exports = (db) => {
  if (db) {
    _.map(initDataArray, initData => {
      let DataModel = Utils.createData(initData.schemaName, initData.schema, db);
      _.map(initData.dataObjs, dataObj => {
        Utils.insertData(DataModel, dataObj);
      });
    })
  }
}
