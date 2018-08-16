require('dotenv').config({ path: '../../.env' });
const Emma = require('emma-sdk');

const emma = new Emma({
    publicKey: process.env.EMMA_PUBLIC_KEY,
    privateKey: process.env.EMMA_PRIVATE_KEY,
    accountID: process.env.EMMA_ACCOUNT_ID
});

exports.addOneMember = function (data) {

    let { email, fields = {}, group_ids = [] } = data;

    if(email) {

        emma.member.addOne({
            email: email,
            fields: fields,
            group_ids: group_ids
        }, (err, res) => {
            if (err) console.log(err);
            console.log(res);
        });
        
    }

}