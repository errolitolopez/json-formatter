"use strict";

function jsonFormat(jsonData) {

    try {
        var json = JSON.parse(jsonData);
    } catch (e) {
        // Code to run if an exception occurs
        [
            // alert('Invalid JSON Data')
        ]
    }

    return JSON.stringify(json, undefined, '\t');
}