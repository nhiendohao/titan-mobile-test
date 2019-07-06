/*
exports.config ={
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['webtest-spec.js'],
    framework: 'jasmine'
};*/
/*
exports.config = {
    framework:'jasmine',
    seleniumAddress: 'http://localhost:4723/wd/hub',
    specs: ['android-spec.js'],

    capabilities: {
        browserName: 'chrome',
        automationName:'UiAutomator2',
        platformName: 'android',
        //platformVersion: '',
        deviceName: 'emulator-5554'
    }
};*/
//This one is working
exports.config={
    seleniumAddress:'http://0.0.0.0:4723/wd/hub',
    specs:['android-spec.js'],

//Reference:https://github.com/appium/sample-code/blob/master/sample-code/examples/node/helpers/caps.js
    capabilities:{
        browserName:'',
        platformName:'Android',
        //platformVersion:'7.0',
        deviceName:'192.168.217.102:5555',
        app:'D:\CRMMobile.apk',
        autoWebview:true
    },

    baseUrl:'http://10.0.2.2:8000',
    ignoreUncaughtExceptions: true,

};


// exports.config = {
//     seleniumAddress: 'http://localhost:4723/wd/hub',
//     specs: ['android-spec.js'],
//     //framework: 'jasmine',
//     capabilities: {
//         'platformName': 'android',
//         'deviceName': '192.168.217.102:5555',
//         //'autoWebView': true,
//         //'autoWebviewTimeout': 10000,
//         //'app': "C:/src/app/platforms/android/build/outputs/apk/android-x86-debug.apk",
//         //'fullReset': true,
//         'browserName': 'chrome',
//         "nativeInstrumentsLib":true,
//         "browser.ignoreSynchronization": true
//     },
//
//
//     baseUrl: 'http://localhost:8000'//jasmineNodeOpts: {
//     //    showColors: true,
//     //    defaultTimeoutInterval: 30000,
//     //    print: function () {
//     //    }
//     //},
//
// };