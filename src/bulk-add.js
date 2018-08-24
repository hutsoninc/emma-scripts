require('dotenv').config({ path: '../.env' });
const { readFile } = require('./helpers');
const { addOneMember } = require('./utils/add-one-member');

const filePath = '../data/data.json';

readFile(filePath, bulkAdd);

function bulkAdd(data) {

    for(let i = 0; i < data.length; i++) {

        let memberData = Object.assign({}, data[i]);

        // Data needs to be mapped from the imported JSON (key = field name)
        let member = {
            email: '',
            fields: {
                
            },
            group_ids: []
        };
        
        addOneMember(member);

    }

}