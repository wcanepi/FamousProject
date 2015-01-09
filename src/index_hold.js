// load css
require('./styles');

// Load polyfills
// require('famous-polyfills');

	// import dependencies
	var Engine = require('famous/core/Engine');
	var Modifier = require('famous/core/Modifier');
	var Transform = require('famous/core/Transform');
	var ImageSurface = require('famous/surfaces/ImageSurface');
	var View = require('famous/core/View');
	var Surface = require('famous/core/Surface');
	var StateModifier = require('famous/modifiers/StateModifier');
	var ContainerSurface = require('famous/surfaces/ContainerSurface');

	// create the main context
	var mainContext = Engine.createContext();

	function MainView() {
		View.apply(this, arguments);

		_createDoghouse.call(this);
	}

	MainView.prototype = Object.create(View.prototype);
	MainView.prototype.constructor = MainView;

	MainView.DEFAULT_OPTIONS = {
		data: undefined,
		doghouseWidth: 0.5 * window.innerHeight
	};

	MainView.DEFAULT_OPTIONS.slideWidth = 0.8 * MainView.DEFAULT_OPTIONS.doghouseWidth;
	MainView.DEFAULT_OPTIONS.slideHeight = MainView.DEFAULT_OPTIONS.slideWidth + 40;
	MainView.DEFAULT_OPTIONS.slidePosition = 0.77 * MainView.DEFAULT_OPTIONS.doghouseWidth;

	function _createDoghouse() {
		var doghouse = new ImageSurface({
			size: [this.options.doghouseWidth, true],
			content: 'images/doghouse.png',
			properties: {
				width: '100%'
			}
		});
		var doghouseModifier = new StateModifier({
			origin: [0.5, 0],
			align: [0.5, 0],
			transform: Transform.behind
		});

		this.add(doghouseModifier).add(doghouse);
	};

	mainContext.add(doghouseModifier).add(doghouse);

