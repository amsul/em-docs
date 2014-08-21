define(function(require) {

    'use strict';

    var Em = require('ember');

    var objects = require('objects')

    var DeclarationsArray = Em.ArrayProxy.extend({
        type: null,
        title: null,
        init: function() {
            this._super()
            var type = this.get('type')
            if ( type ) {
                if ( !type ) {
                    throw new Error('A "type" is required to create a declarations array.')
                }
            }
            var content = this.get('content')
            if ( content ) {
                var objectName = type.classify() + 'Object'
                if ( !(objectName in objects) ) {
                    throw new Error('Unrecognized declaration type.')
                }
                content = content.map(function(item) {
                    return objects[objectName].create({
                        content: item
                    })
                })
                this.setObjects(content)
            }
        }
    })

    var FilesArray = DeclarationsArray.extend({
        type: 'file',
        title: 'Files',
    })

    var ModulesArray = DeclarationsArray.extend({
        type: 'module',
        title: 'Modules',
    })

    var ClassesArray = DeclarationsArray.extend({
        type: 'class',
        title: 'Classes',
    })

    var ClassitemsArray = DeclarationsArray.extend({
        type: 'classitem',
        title: 'Class items',
    })

    return {
        DeclarationsArray: DeclarationsArray,
        FilesArray: FilesArray,
        ModulesArray: ModulesArray,
        ClassesArray: ClassesArray,
        ClassitemsArray: ClassitemsArray,
    }
})