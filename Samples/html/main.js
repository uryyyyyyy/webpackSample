var $ = require('jquery');
var _html = require('./template.html');

$(function() {
	console.log(_html);
	$('#template').html(_html);
});
