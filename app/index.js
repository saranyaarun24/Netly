var React = require('react');
var ReactDOM = require('react-dom');
var firebase = require('firebase');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;

var routes = require('./config/routes.js');

var config = {
    apiKey: "AIzaSyAprVys_518SkcbwR8UupjYaJoO1HA1DI8",
    authDomain: "testproje-64b1d.firebaseapp.com",
    databaseURL: "https://testproje-64b1d.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "362961044554"
};

var selingConfigTester = {/*
    apiKey: "your API Key",
    authDomain: "your authDomain",
    databaseURL: "your databaseURL",
    storageBucket: "your storageBucket",
    messagingSenderId: "your messagingSenderId"
    */
 };

firebase.initializeApp(config);

ReactDOM.render(routes, document.getElementById('app'));
