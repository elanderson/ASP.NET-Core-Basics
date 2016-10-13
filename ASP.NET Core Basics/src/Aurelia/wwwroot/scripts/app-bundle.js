define('app',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    _classCallCheck(this, App);
  };
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
define('contacts/contact-list',['exports', './contact-service'], function (exports, _contactService) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ContactList = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var ContactList = exports.ContactList = function () {
        ContactList.inject = function inject() {
            return [_contactService.ContactService];
        };

        function ContactList(contactService) {
            _classCallCheck(this, ContactList);

            this.contactService = contactService;
            this.contacts = [];
        }

        ContactList.prototype.created = function created() {
            var _this = this;

            this.contactService.GetAll().then(function (contacts) {
                return _this.contacts = contacts;
            });
        };

        return ContactList;
    }();
});
define('contacts/contact-service',['exports', 'aurelia-fetch-client', './contact'], function (exports, _aureliaFetchClient, _contact) {
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
            }).then(function (contacts) {
                return Array.from(contacts, function (c) {
                    return new _contact.Contact(c);
                });
            }).catch(function (error) {
                return console.log(error);
            });
        };

        return ContactService;
    }();
});
define('contacts/contact',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Contact = exports.Contact = function () {
        function Contact(data) {
            _classCallCheck(this, Contact);

            Object.assign(this, data);
        }

        Contact.prototype.getAddress = function getAddress() {
            return this.address + " " + this.city + ", " + this.state + " " + this.postalCode;
        };

        return Contact;
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
define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"./contacts/contact-list\"></require>\r\n    <h1>App</h1>\r\n    <contact-list></contact-list>\r\n</template>\r\n"; });
define('text!contacts/contact-list.html', ['module'], function(module) { module.exports = "<template>\r\n    <ul>\r\n        <li repeat.for=\"contact of contacts\">\r\n            <h4>${contact.name}</h4>\r\n            <p>${contact.getAddress()}</p>\r\n        </li>\r\n    </ul>\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map