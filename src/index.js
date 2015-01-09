// load css
require('./styles');

// Load polyfills
require('famous-polyfills');

// import dependencies
var Engine = require('famous/core/Engine');
var Modifier = require('famous/core/Modifier');
var Transform = require('famous/core/Transform');
var ImageSurface = require('famous/surfaces/ImageSurface');
var StateModifier = require('famous/modifiers/StateModifier');
var EventHandler = require('famous/core/EventHandler');
var Surface = require('famous/core/Surface');


var mainContext = Engine.createContext();
// mainContext.setPerspective(500);


var lawn = new ImageSurface({
	content: 'images/greenlawn.jpg',
	classes: ['backfaceVisibility']
});

var homeModifier = new Modifier({
	align: [.5,.5],
	origin: [.5,.5],
	transform: Transform.translate(-100, -100),
	opacity: 1
});

var doginhouse = new ImageSurface({
	size: [300, 300],
	content: 'images/doginhouse.png',
	classes: ['backfaceVisibility']

});

var doghouse = new ImageSurface({
	size: [300, 300],
	content: 'images/doghouse.png',
 	classes: ['backfaceVisibility']
});

var dog = new ImageSurface({
	size: [200, 200],
	content: 'images/dog.png',
	classes: ['backfaceVisibility']
});

var woofModifier = new Modifier({
	align: [1,1],
	origin: [1,1],
	transform: Transform.translate(-40, -100),
	opacity: 1

});

var woof = new ImageSurface({
	content: 'images/woof.png',
	size: [100, 67],
	classes: ['backfaceVisibility']

});

doghouse.on('click', function(){
mainContext.add(homeModifier).add(doginhouse);
});

dog.on('click', function(){
mainContext.add(woofModifier).add(woof);
});

var bottompositionModifier = new Modifier({
	align: [1, 1],
	origin: [1, 1]
});


mainContext.add(doghouse);
mainContext.add(lawn).add(doghouse);
mainContext.add(bottompositionModifier).add(dog);

