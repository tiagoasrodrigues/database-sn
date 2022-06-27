Couchbase

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