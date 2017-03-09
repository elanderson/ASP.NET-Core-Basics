"use strict";
require("angular2-universal-polyfills");
require("zone.js");
var core_1 = require("@angular/core");
var angular2_universal_1 = require("angular2-universal");
var app_module_1 = require("./app/app.module");
core_1.enableProdMode();
var platform = angular2_universal_1.platformNodeDynamic();
function default_1(params) {
    return new Promise(function (resolve, reject) {
        var requestZone = Zone.current.fork({
            name: 'angular-universal request',
            properties: {
                baseUrl: '/',
                requestUrl: params.url,
                originUrl: params.origin,
                preboot: false,
                // TODO: Render just the <app> component instead of wrapping it inside an extra HTML document
                // Waiting on https://github.com/angular/universal/issues/347
                document: '<!DOCTYPE html><html><head></head><body><app></app></body></html>'
            },
            onHandleError: function (parentZone, currentZone, targetZone, error) {
                // If any error occurs while rendering the module, reject the whole operation
                reject(error);
                return true;
            }
        });
        return requestZone.run(function () { return platform.serializeModule(app_module_1.AppModule); }).then(function (html) {
            resolve({ html: html });
        }, reject);
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=boot-server.js.map