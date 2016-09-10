'use strict';

describe('toUrl', function() {

  describe('when any other environment url has no hash', function() {
    beforeEach(module('skySeedProject', function($provide) {
      $provide.value('$location', {
        absUrl: function() {
          return 'https://my-reverse-proxy.com.au/context/skySeedProject/';
        }
      });
    }));

    it('should assume everything from the host name to the final slash is the context', inject(function(toUrl) {
      expect(toUrl('/api/myservice')).toEqual('/context/skySeedProject/api/myservice');
    }));
  });
});
