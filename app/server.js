/* Vendor modules */
var mongoose = require('mongoose');

/* Initialize the app */
var app = require('express');

/* Connect to the database */
mongoose.connect(require('./config/database').url);

/* Start the server */
var server = app.listen(3000, function () {
    console.log('Listening on port %d', server.address().port);
});
