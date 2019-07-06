// describe('It should open gooogle',function () {
//     it('should abcde', function () {
//         //browser.get('https://angularjs.org/');
//         //browser.sleep(5000);
//         //expect(browser.getCurrentUrl()).toMatch('https://angularjs.org/');
//         console.log('Doing something');
//
//     });
//
//
// });
// spec.js
describe('Protractor Demo App', function() {
    it('should add one and two', function() {
        browser.ignoreSynchronization = true;
        //browser.get('http://juliemr.github.io/protractor-demo/');
     /*   browser.sleep(5000);
        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);

        element(by.id('gobutton')).click();
        expect(element(by.xpath('/html/body/div/table/tbody/tr/td[3]')).getText()).
        toEqual('3'); // This is correct!*/
        console.log('I want to see something');
        let element(by.model('first')).sendKeys(1);
    });
});