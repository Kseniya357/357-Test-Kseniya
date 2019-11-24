describe('Expediate cheach vacation', function() {
	it('This is a first test to launch the expedia website', function() {
    	browser.ignoreSynchronization = true;
    	browser.get('https://www.expedia.com');
    	browser.driver.getTitle().then(function(pageTitle) {
    		expect(pageTitle).toContain('Expedia Trevel: Search Hotels');
    	})
	});
});
