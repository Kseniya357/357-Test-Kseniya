exports.config = {
	directConnect: true,

	//Capatibilities to be passed to the webdriver instance.
	capatibilities: {
		'browserName': 'chrome',
		//chromedriver: '78.0.3904.97'
	},

	//Framework to use. Jasmin is recommended.
	framework: 'jasmine',

	// Specs patterns are relative to the current working directory when
	// protractor is called.
	specs: ['launch_website.js'],

	// onPrepare: function(){//configure junit xml report

	// 	var jasmineReporters = require('/C:/Users/User1/AppData/Roaming/npm');
	// 	jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
	// 		consolidateAll: true,
	// 		filePrefix: 'quitest-xmloutput',
	// 		savePath: 'test/reports'
	// 	}));

	//},
}

  // framework: 'jasmine2',
  //   onPrepare: function() {
  //   var jasmineReporters = require('path_of_installed_jasmine-reporters-plugin');
  //   //update proper path, in my case its ('/usr/local/lib/node_modules/jasmine-reporters')
  //   jasmine.getEnv().addReporter(
  //       new jasmineReporters.JUnitXmlReporter(null, true, true, '/test/e2e/JasmineReporter')
  //   );};C:\Users\User1\AppData\Roaming\npm
