let mongoose = require('mongoose');

const mongoPrefix = 'mongodb://'

class Utils {
  createConnection(dbName, host) {
    let hostIP = host || '127.0.0.1';
    let url = mongoPrefix + hostIP + '/' + dbName;
    console.log('url:', url);
    return mongoose.createConnection(url);
    //let db = mongoose.connection;
    //db.on('error', console.error.bind(console, 'connection error:'));
    //return db;
  }
  
  createData(schemaName, schema, db) {
    let dataSchema = mongoose.Schema(schema);
    return db.model(schemaName, dataSchema);
  }
  
  insertData(DataModel, dataObj) {
    let data = new DataModel(dataObj);
    data.save((err, data) => {
      if (err) {
        return console.error(err);
      } else {
      }
    });
  }
}

module.exports = new Utils();
