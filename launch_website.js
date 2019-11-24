describe('Expediate cheach vacation', function() {
	it('This is a first test to launch the expedia website', function() {
    	browser.ignoreSynchronization = true;
    	console.log('I am opened new bowser');
    	browser.sleep(1000);
    	browser.get('https://www.expedia.com');
    	browser.driver.getTitle().then(function(pageTitle) {
    		expect(pageTitle).toContain('Expedia Travel: Search Hotels');
    	})
	});
});
