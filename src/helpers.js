const fs = require('fs');

exports.readFile = function (path, callback) {

    fs.readFile(path, (err, data) => {

        if (err) {
            console.log(err);
            process.exit();
        }

        callback(JSON.parse(data));

    });

}