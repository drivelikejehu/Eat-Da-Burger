const connection = require("../config/connection.js");

// * In the `orm.js` file, create the methods that will execute the necessary MySQL 
//commands in the controllers. These are the methods you will need to use in order 
//to retrieve and store data in your database.

// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

const orm = {
    selectAll: function(tableInput, cb) {
    var dbQuery = "SELECT * FROM " + tableInput + ";";
    connection.query(dbQuery, function (err, res) {
        if (err) {
            throw err;
        }
        cb(res);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    var dbQuery =
      "INSERT INTO " +
      table +
      " (" +
      cols.toString() +
      ") " +
      "VALUES (" +
      makeQmarks(vals.length) +
      ") ";

    console.log(dbQuery);
    connection.query(dbQuery, vals, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
};

module.exports = orm;
