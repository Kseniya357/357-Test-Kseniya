exports.config = {
	directConnect: true,

	//Capatibilities to be passed to the webdriver instance.
	capatibilities: {
		'browserName': 'chrome'
	},

	//Framework to use. Jasmin is recommended.
	framework: 'jasmine',

	// Specs patterns are relative to the current working directory when
	// protractor is called.
	specs: ['launch_wesite.js'],

	onPrepare: function(){//configure junit xml report

		var jasmineReporters = require('jasmine-reporters');
		jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
			consolidateAll: true,
			filePrefix: 'quitest-xmloutput',
			savePath: 'test/reports'
		}));

	},
}