let _ = require('lodash');

let Utils = require('./utils');
let messages = require('./data/messages.json')

const piSchemaName = 'pirecord';
const piSchema = {
  id: String,
  name: String,
  projectId: String,
  processId: String,
  completed: Boolean,
  closed: Boolean,
  createDate: String,
  lastUpdateDate: String,
  discussionId: String
};

const tiSchemaName = 'tirecord';
const tiSchema = {
  id: String,
  name: String,
  taskId: String,
  processInstanceId: String,
  completed: Boolean,
  closed: Boolean,
  createDate: String,
  lastUpdateDate: String,
  targetDate: String,
  discussionId: String,
  progress: Object
};

module.exports = (db) => {
  if (db) {
    const piModel = Utils.createData(piSchemaName, piSchema, db);
    const tiModel = Utils.createData(tiSchemaName, tiSchema, db);
    _.map(messages, messageItem => {
      let piObj = {
        id: messageItem._id.$oid,
        name: messageItem.version,
        projectId: '000',
        processId: '000',
        completed: messageItem.complete === 'true',
        closed: false,
        createDate: messageItem.date.$date,
        lastUpdateDate: 'na',
        discussionId: 'na'
      };
      Utils.insertData(piModel, piObj);
  
      _.forEach(messageItem.data, (value, key) => {
        let taskId = ('00' + key).slice(-3);
        let percentageVal = (value.isSignoff === 'true' ? 1 : 0);
        let statusVal = (value.isSignoff === 'true' ? 'Completed' : 'Not started');
        let statusDetailsVal = (value.isSignoff === 'true' ? 'Finished successfully.' : 'Not started currently.');
        let progressObj = {
          percentage: percentageVal,
          status: statusVal,
          statusDetails: statusDetailsVal
        };
  
        let tiObj = {
          id: messageItem._id.$oid + taskId,
          name: value.name,
          taskId: taskId,
          processInstanceId: piObj.id,
          completed: value.isSignoff === 'true',
          closed: false,
          createDate: messageItem.date.$date,
          lastUpdateDate: value.signoffTime || '',
          targetDate: value.eta,
          discussionId: 'na',
          progress: progressObj
        };
        Utils.insertData(tiModel, tiObj);
      });
    })
  }
}
