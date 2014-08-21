define(function(require) {

    'use strict';

    var Em = require('ember');

    var objectKeys = function(propertyName) {
        return function() {
            var object = this.get(propertyName)
            return Object.keys(object)
        }.property(propertyName)
    }

    return {
        objectKeys: objectKeys
    }
});