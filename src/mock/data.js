const { v4: uuidv4 } = require('uuid');

let items = [
    {
        id: uuidv4(),
        name: 'Task 1 Components can refer to other components in their output',
        level: 0
    },
    {
        id: uuidv4(),
        name: 'Task 2 Components can refer to other components in their output',
        level: 2
    },
    {
        id: uuidv4(),
        name: 'Task 3 dfirieurie Components can refer to other components in their output',
        level: 2
    },
    {
        id: uuidv4(),
        name: 'Task oeiwo dfirieurie Components can refer to other components in their output',
        level: 1
    }
];
export default items;