const connection = require("../config/connection.js");

// * In the `orm.js` file, create the methods that will execute the necessary MySQL 
//commands in the controllers. These are the methods you will need to use in order 
//to retrieve and store data in your database.

// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

const orm = {
    selectAll: function(table, cb) {
    var selectQuery = `SELECT * FROM ${table};`;
    connection.query(selectQuery, function (err, res) {
        if (err) {
            throw err;
        }
        cb(result);
    })
    }
}

module.exports = orm;
