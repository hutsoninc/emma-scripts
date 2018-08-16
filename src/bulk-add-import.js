require('dotenv').config({ path: '../.env' });
const { readFile } = require('./helpers');
const Emma = require('emma-sdk');

const emma = new Emma({
    publicKey: process.env.EMMA_PUBLIC_KEY,
    privateKey: process.env.EMMA_PRIVATE_KEY,
    accountID: process.env.EMMA_ACCOUNT_ID
});

const filePath = '../data/data.json';

readFile(filePath, bulkAddImport);

// Emma field names need to be mapped in the JSON data (key = field name)
function bulkAddImport(data) {

    emma.member.bulkAdd({
        members: data,
        source_filename: '', // File name to be associated with import
        add_only: false,
        group_ids: [],
        automate_field_changes: false
    }, (err, res) => {
        if (err) console.log(err);
        console.log(res);
    });

}