System.register(['./generated-chunk.js', './generated-chunk2.js'], function (exports, module) {
	'use strict';
	var x, y;
	return {
		setters: [function (module) {
			x = module.a;
		}, function (module) {
			y = module.a;
		}],
		execute: function () {

			var main1 = exports('default', x + y);

		}
	};
});
