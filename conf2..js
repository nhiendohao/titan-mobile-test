exports.config = {
    seleniumAddress: 'http://localhost:4723/wd/hub',
    specs: ['android-spec.js'],

    capabilities: {
        browserName: 'chrome',
        platformName: 'android',
        //platformVersion: '',
        deviceName: 'emulator-5554'
    }
};