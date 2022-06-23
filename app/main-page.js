// Sqlite

function onNavigatingTo(args) {
    var page = args.object;
    if (!Sqlite.exists("people.db")) {
        Sqlite.copyDatabase("people.db");
    }
    (new Sqlite("people.db")).then(db => {
        database = db;
        db.execSQL("CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)").then(id => {
            page.bindingContext = createViewModel(db);
        }, error => {
            console.log("CREATE TABLE ERROR", error);
        });
    }, error => {
        console.log("OPEN DB ERROR", error);
    });
}

// Couchbase

var couchbaseModule = require("nativescript-couchbase");
var database = new couchbaseModule.Couchbase("test-database");

var documentId = database.createDocument({
    "firstname": "Tiago",
    "lastname": "Rodrigues",
    "address": {
        "city": "São Paulo",
        "state": "SP",
        "country": "BRA"
    },
    "twitter": "https://www.twitter.com/tiagoasrodrigs"
});

var person = database.getDocument(documentId);

database.updateDocument(documentId, {
    "firstname": "Tiago",
    "lastname": "Augusto",
    "twitter": "https://www.twitter.com/tiagoasrodrigs"
});

var isDeleted = database.deleteDocument(documentId);