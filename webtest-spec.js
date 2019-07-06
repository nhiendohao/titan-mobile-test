describe('Try to run web test with Angular',function() {
    beforeEach(function () {
        browser.get('https://angularjs.org/', 5000);
    });
    it('should navigate to expected website', function () {
        expect(browser.getCurrentUrl()).toMatch('https://angularjs.org/');

    });
    it('should able to click on new version button', function () {
        var newVersionButton = element(by.xpath('/html/body/div[1]/div[1]/div/div[1]/a'));
        // newVersionButton exist
        expect(newVersionButton.isPresent(true));

        newVersionButton.click();

        // Validate navigate to new page successfully
        browser.getAllWindowHandles().then(function (handles) {
            expect(handles.length).toEqual(2);
            browser.switchTo().window(handles[1]).then(function () {
                expect(browser.getCurrentUrl()).toMatch('https://angular.io');
            });
        });
    });
});