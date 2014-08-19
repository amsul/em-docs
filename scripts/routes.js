define(function(require) {

    'use strict';

    var Em = require('ember')
    var $ = require('jquery')

    var objects = require('objects')
    var DocItemObject = objects.DocItemObject

    var ApplicationRoute = Em.Route.extend({
        model: function() {
            return $.getJSON($('script[data-docs]').data('docs')).then(function(data) {

                var objectToArray = function(object) {
                    return Object.keys(object).map(function(key) {
                        return object[key]
                    })
                }

                // Convert objects into arrays.
                data.files = objectToArray(data.files)
                data.classes = objectToArray(data.classes)
                data.modules = objectToArray(data.modules)
                data.modules.forEach(function(module) {
                    module.classes = Object.keys(module.classes)
                })

                // Fix the file path that yuidoc gives for modules..
                data.modules.forEach(function(module) {
                    var moduleName = module.name
                    var file = data.files.find(function(f) {
                        return moduleName in f.modules
                    })
                    module.file = file.name
                })

                return data
            })
        }
    })

    var ModuleRoute = Em.Route.extend({
        model: function(params) {
            var data = this.modelFor('application')
            return DocItemObject.create({
                data: data.modules.findBy('name', params.module_name),
            })
        }
    })

    var ClassRoute = Em.Route.extend({
        model: function(params) {
            var data = this.modelFor('application')
            var klass = data.classes.findBy('name', params.class_name)
            return DocItemObject.create({
                data: klass,
                project: data.project,
                isExtended: !!klass.extends,
                extendedFrom: klass.extends
            })
        }
    })

    return {
        ApplicationRoute: ApplicationRoute,
        ModuleRoute: ModuleRoute,
        ClassRoute: ClassRoute,
    }
})