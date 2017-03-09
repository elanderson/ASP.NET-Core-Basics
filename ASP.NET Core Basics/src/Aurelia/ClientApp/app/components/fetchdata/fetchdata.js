// The following line is a workaround for aurelia-fetch-client requiring the type UrlSearchParams
// to exist in global scope, but that type not being declared in any public @types/* package.
/// <reference path="../../../../node_modules/aurelia-fetch-client/doc/url.d.ts" />
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var aurelia_fetch_client_1 = require("aurelia-fetch-client");
var aurelia_framework_1 = require("aurelia-framework");
var Fetchdata = (function () {
    function Fetchdata(http) {
        var _this = this;
        http.fetch('/api/SampleData/WeatherForecasts')
            .then(function (result) { return result.json(); })
            .then(function (data) {
            _this.forecasts = data;
        });
    }
    return Fetchdata;
}());
Fetchdata = __decorate([
    aurelia_framework_1.inject(aurelia_fetch_client_1.HttpClient),
    __metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient])
], Fetchdata);
exports.Fetchdata = Fetchdata;
//# sourceMappingURL=fetchdata.js.map