/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"luis_practica/project1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
