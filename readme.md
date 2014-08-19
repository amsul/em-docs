# em-docs v0.0.1-0

An Ember.js driven, YUIDoc parsed, documentation module.

**Warning**: Very early and very rough with absolutely zero testing.


### Requires

- [`grunt-contrib-yuidoc`][]


### Setting it up in a project

1. `cd` into the root of your project directory
2. `git clone git@github.com:amsul/em-docs.git docs`
3. Configure [`grunt-contrib-yuidoc`][] for your own project
4. Point the `outdir` to `docs/scripts-docs/`
5. Create a static server in your root directory. Eg `python -m http.server 8000`
6. Visit `http://localhost:8000/docs`


### Developing

Check [todo.md](todo.md).


<br>

---

© 2014 [Amsul](http://twitter.com/amsul_)

Licensed under [MIT](http://amsul.ca/MIT)


[`grunt-contrib-yuidoc`]: https://github.com/gruntjs/grunt-contrib-yuidoc