const initDataArray = [
  {
    schemaName: 'project', 
    schema: {
      id: String,
      name: String,
      processIds: Array
    },
    dataObjs: [
      {
        id: '000',
        name: 'Campaign UI',
        processIds: ['process1', 'process2']
      }
    ]
  },
  {
    schemaName: 'process', 
    schema: {
      id: String,
      name: String,
      type: String,
      taskIds: Array
    },
    dataObjs: [
      {
        id: '000',
        name: 'Release Tracker',
        type: 'pipeline',
        taskIds: [ '000', '001', '002', '003', '004', '005', '006', '007', '008' ]
      }
    ]
  },
  {
    schemaName: 'task', 
    schema: {
      id: String,
      name: String,
      execution: String
    },
    dataObjs: [
      {
        id: '000',
        name: 'FI to vNext',
        execution: ''
      },
      {
        id: '001',
        name: 'Deploy to SI',
        execution: ''
      },
      {
        id: '002',
        name: 'BVT on SI',
        execution: ''
      },
      {
        id: '003',
        name: 'Manual Test on SI',
        execution: ''
      },
      {
        id: '004',
        name: 'Deploy to Beta Prod',
        execution: ''
      },
      {
        id: '005',
        name: 'BVT and Gomez on Beta',
        execution: ''
      },
      {
        id: '006',
        name: 'Manual Test on Beta',
        execution: ''
      },
      {
        id: '007',
        name: 'Go Live',
        execution: ''
      },
      {
        id: '008',
        name: 'FI to Live',
        execution: ''
      }
    ]
  }
]

module.exports = initDataArray;
