describe('<%= controllerName %> tests', function () {
    'use strict';

    beforeEach(module('<%= angularModuleName %>'));
    beforeEach(inject(function ($controller) {
        $controller('<%= controllerName %>', {});
    }));

    describe('tests', function () {
        it('single spec', function () {
            // put spec code here
        });
    });
});