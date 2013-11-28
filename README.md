<img align="right" src="http://absolunet.github.io/kafe/assets/logo-kafe.png" width="160" height="256" alt="kafe" />
### kafe v2.0.0a
#### Mixing javascript crops for a perfect flavour.
> /kæfˈeɪ/ (haitian creole) A beverage made by infusing the beans of the coffee plant in hot water.

<br>

## Quick start

#### Requirements
A jQuery instance that will be copied in kafe.

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
<script>window.kafejQuery = window.jQuery</script>
```

#### With [Grunt](http://gruntjs.com/)
- Take the files under [build](https://github.com/absolunet/kafe/tree/master/build) folder and put them in a `libs` folder next to your `gruntfile.js`.
- Use [grunt-includes](https://github.com/vanetix/grunt-includes) with a setup looking like this:

```js
config.includes.core = {
	options: {
		includeRegexp:  /^\s*\/\/\s@import\s'([^']+)'\s*$/,
		duplicates:     false,
		filenameSuffix: '.js',
		includePath:    './'
	},
	src:  'libs/kafe/kafe',
	dest: 'js/kafe-build.js'
};
```

#### Standalone
- Take the files under [build](https://github.com/absolunet/kafe/tree/master/build) folder and put them in your project.
- Use the `// @import 'FILENAME'` in the files header to know which files to include manually.


## Documentation
Visit the [http://absolunet.github.io/kafe](http://absolunet.github.io/kafe) website for all the things.
## Release history
See the [CHANGELOG](https://github.com/absolunet/kafe/tree/master/CHANGELOG).

## License 
See the [MIT LICENSE](https://github.com/absolunet/kafe/tree/master/LICENSE).