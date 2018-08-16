require('dotenv').config({ path: '../.env' });
const Emma = require('emma-sdk');

const emma = new Emma({
    publicKey: process.env.EMMA_PUBLIC_KEY,
    privateKey: process.env.EMMA_PRIVATE_KEY,
    accountID: process.env.EMMA_ACCOUNT_ID
});

function listMembers() {

    emma.member.list({}, (err, res) => {
        if (err) console.log(err);
        console.log(res);
    });

}

listMembers();