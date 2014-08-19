(function() {

    'use strict';

    var require = window.require = {
        baseUrl: '/scripts',
        deps: ['main'],
        paths: {
            'text': '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text',
            'ember': '//cdnjs.cloudflare.com/ajax/libs/ember.js/1.7.0-beta.2/ember',
            'handlebars': '//cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.3.0/handlebars',
            'jquery': '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery',
            'marked': '//cdnjs.cloudflare.com/ajax/libs/marked/0.3.2/marked',
            'highlight#source': '//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.1/highlight.min',
            'highlight-javascript': '//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.1/languages/javascript.min',
            'highlight-json': '//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.1/languages/json.min',
            'highlight-css': '//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.1/languages/css.min',
            'highlight-scss': '//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.1/languages/scss.min',
            'highlight-xml': '//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.1/languages/xml.min',
            'highlight-handlebars': '//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.1/languages/handlebars.min',
        },
        shim: {
            'ember': {
                deps: ['handlebars', 'jquery'],
                exports: 'Em'
            },
            'handlebars': {
                exports: 'Handlebars'
            },
            'highlight#source': {
                exports: 'hljs'
            }
        }
    }

    // Overwritten for locally debugging..
    require.paths['text'] = '../vendor/text'
    require.paths['ember'] = '../vendor/ember'
    require.paths['handlebars'] = '../vendor/handlebars'
    require.paths['jquery'] = '../vendor/jquery'
    require.paths['marked'] = '../vendor/marked'
    require.paths['highlight#source'] = '../vendor/highlight'
    require.paths['highlight-javascript'] = '../vendor/highlight-javascript'
    require.paths['highlight-json'] = '../vendor/highlight-json'
    require.paths['highlight-css'] = '../vendor/highlight-css'
    require.paths['highlight-scss'] = '../vendor/highlight-scss'
    require.paths['highlight-xml'] = '../vendor/highlight-xml'
    require.paths['highlight-handlebars'] = '../vendor/highlight-handlebars'

})();