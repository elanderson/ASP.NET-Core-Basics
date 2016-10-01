define('app',['exports', './services/contactService'], function (exports, _contactService) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.App = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var App = exports.App = function () {
        App.inject = function inject() {
            return [_contactService.ContactService];
        };

        function App(contactService) {
            var _this = this;

            _classCallCheck(this, App);

            this.message = 'Hello World!';
            contactService.GetAll().then(function (result) {
                _this.message = 'Contact Results: \n                                ' + result.map(function (contact) {
                    return contact.name;
                });
            });
        }

        return App;
    }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('services/contactService',['exports', 'aurelia-fetch-client'], function (exports, _aureliaFetchClient) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ContactService = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var ContactService = exports.ContactService = function () {
        ContactService.inject = function inject() {
            return [_aureliaFetchClient.HttpClient];
        };

        function ContactService(http) {
            _classCallCheck(this, ContactService);

            this.http = http;

            this.http.configure(function (config) {
                config.useStandardConfiguration().withBaseUrl('http://localhost:13322/api/contactsApi/');
            });
        }

        ContactService.prototype.GetAll = function GetAll() {
            return this.http.fetch('').then(function (response) {
                return response.json();
            }).catch(function (error) {
                return console.log(error);
            });
        };

        return ContactService;
    }();
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n  <h1>${message}</h1>\r\n</template>\r\n"; });
//# sourceMappingURL=app-bundle.js.map