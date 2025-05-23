var AngularReporter = require('protractor-beautiful-reporter');
var reporter = new AngularReporter({
  baseDirectory: './DemoProject/target1/screenshots',
  
  screenshotsSubfolder: 'images',
  
  jsonsSubfolder: 'jsons',
  clientDefaults:{
    showTotalDurationIn:"header",
    totalDurationFormat:"hms"
  }
}).getJasmine2Reporter();
exports.config = {
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      'browserName': 'firefox',
      //'browserName': 'chrome'
      'moz:firefoxOptions': {
        'args': ['--safe-mode']
      }
    },
  
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['QAClickMain.js'],

    
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 2000000
    },
    // Assign the test reporter to each running instance
  onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
  }
    
  };
  
