"use strict";
require("bootstrap/dist/css/bootstrap.css");
require("bootstrap");
function configure(aurelia) {
    aurelia.use.standardConfiguration();
    if (IS_DEV_BUILD) {
        aurelia.use.developmentLogging();
    }
    aurelia.start().then(function () { return aurelia.setRoot('app/components/app/app'); });
}
exports.configure = configure;
//# sourceMappingURL=boot.js.map