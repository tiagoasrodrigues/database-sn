var Observable = require("data/observable").Observable;
var Sqlite = require("nativescript-sqlite");

function createViewModel(database) {
  var viewModel = new Observable();

  viewModel.firstname = "";
  viewModel.lastname = "";

  viewModel.insert = function () {
    database.execSQL("INSERT INTO people (firstname, lastname) VALUES (?, ?)"[this.firstname, this.lastname]).then(id => {
      console.log("INSERT RESULT", id);
    }, error => {
      console.log("INSERT ERROR", error)
    });
  }

  viewModel.select = function () {
    database.all("SELECT * FROM people").then(rows => {
      for(var row in rows) {
        console.log("RESULT", rows[row]);
      }
    }, error => {
      console.log("SELECT ERROR", error)
    })
  }

  return viewModel;
}

exports.createViewModel = createViewModel;