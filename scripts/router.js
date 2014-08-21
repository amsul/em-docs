define(function(require) {

    'use strict';

    var Em = require('ember')

    var Router = Em.Router.extend()

    Router.map(function() {
        this.route('module', { path: 'modules/:module_name' })
        this.route('class', { path: 'classes/:class_name' })
        this.route('file', { path: 'files/:file_name' })
    })

    return {
        Router: Router
    }
})