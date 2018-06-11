import {Factory} from "./factory/factory.model";

export const DUMMYFACTORY: Factory = {
  name: 'dummy factory',
  halls: [
    {
      id: 1,
      name: 'dummy hall 1',
      area: '36m2',
      height: 9,
      width: 4,
      numberOfMachines: 3,
      machines: [
        {
          machineId: '11',
          category: 'Machine',
          name: 'dummy machine of hall 1',
          description: 'for some dummy data',
          lastAction: {
            date: new Date('2017-08-31T20:00:00'),
            type: 'checkup',
            description: 'take exam'
          },
          nextAction: {
            date: new Date('2017-08-31T22:00:00'),
            type: 'repair',
            description: 'take course again next year'
          }
        },
        {
          machineId: '12',
          category: 'Machine',
          name: 'second dummy machine of hall 1',
          description: 'for some dummy data',
          lastAction: {
            date: new Date('2017-08-31T20:00:00'),
            type: 'checkup',
            description: 'take exam'
          },
          nextAction: {
            date: new Date('2017-08-31T22:00:00'),
            type: 'repair',
            description: 'take course again next year'
          }
        },
        {
          machineId: '13',
          category: 'Machine',
          name: 'third dummy machine of hall 1',
          description: 'for some dummy data',
          lastAction: {
            date: new Date('2017-08-31T20:00:00'),
            type: 'checkup',
            description: 'take exam'
          },
          nextAction: {
            date: new Date('2017-08-31T22:00:00'),
            type: 'repair',
            description: 'take course again next year'
          }
        }
      ]
    },
    {
      id: 9,
      name: 'dummy hall 9',
      area: '45m2',
      height: 9,
      width: 5,
      numberOfMachines: 3,
      machines: [
        {
          machineId: '91',
          category: 'Machine',
          name: 'dummy machine of hall 9',
          description: 'for some dummy data',
          lastAction: {
            date: new Date('2017-08-31T20:00:00'),
            type: 'checkup',
            description: 'take exam'
          },
          nextAction: {
            date: new Date('2017-08-31T22:00:00'),
            type: 'repair',
            description: 'take course again next year'
          }
        },
        {
          machineId: '92',
          category: 'Machine',
          name: 'second dummy machine of hall 9',
          description: 'for some dummy data',
          lastAction: {
            date: new Date('2017-08-31T20:00:00'),
            type: 'checkup',
            description: 'take exam'
          },
          nextAction: {
            date: new Date('2017-08-31T22:00:00'),
            type: 'repair',
            description: 'take course again next year'
          }
        },
        {
          machineId: '93',
          category: 'Machine',
          name: 'third dummy machine of hall 9',
          description: 'for some dummy data',
          lastAction: {
            date: new Date('2017-08-31T20:00:00'),
            type: 'checkup',
            description: 'take exam'
          },
          nextAction: {
            date: new Date('2017-08-31T22:00:00'),
            type: 'repair',
            description: 'take course again next year'
          }
        },
        {
          machineId: '94',
          category: 'Machine',
          name: 'fourth dummy machine of hall 9',
          description: 'for some dummy data',
          lastAction: {
            date: new Date('2017-08-31T20:00:00'),
            type: 'checkup',
            description: 'take exam'
          },
          nextAction: {
            date: new Date('2017-08-31T22:00:00'),
            type: 'repair',
            description: 'take course again next year'
          }
        }
      ]
    }
  ]
};
