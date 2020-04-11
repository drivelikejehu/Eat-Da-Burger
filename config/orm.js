const connection = require("../config/connection.js");

function makeQuestionMarks(num) {
    var array = [];

    for(let i = 0; i < num; i++) {
        array.push("?");
    }
    return array.toString();
}
// * `updateOne()`

const orm = {
    selectAll: function(tableInput, cb) {
    var allQuery = `SELECT * FROM ${tableInput}`;
    connection.query(allQuery, function (err, res) {
        if (err) {
            throw err;
        }
        cb(res);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    var oneQuery =
      "INSERT INTO " +
      table +
      " (" +
      cols.toString() +
      ") " +
      "VALUES (" +
      makeQuestionMarks(vals.length) +
      ") ";

    console.log(oneQuery);
    connection.query(oneQuery, vals, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
};

module.exports = orm;
