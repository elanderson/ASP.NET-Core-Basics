"use strict";
var App = (function () {
    function App() {
    }
    App.prototype.configureRouter = function (config, router) {
        config.title = 'Aurelia';
        config.map([{
                route: ['', 'home'],
                name: 'home',
                settings: { icon: 'home' },
                moduleId: '../home/home',
                nav: true,
                title: 'Home'
            }, {
                route: 'counter',
                name: 'counter',
                settings: { icon: 'education' },
                moduleId: '../counter/counter',
                nav: true,
                title: 'Counter'
            }, {
                route: 'fetch-data',
                name: 'fetchdata',
                settings: { icon: 'th-list' },
                moduleId: '../fetchdata/fetchdata',
                nav: true,
                title: 'Fetch data'
            },
            {
                route: 'contact-list',
                name: 'contactlist',
                settings: { icon: 'list-alt' },
                moduleId: '../contacts/contactList',
                nav: true,
                title: 'Contact List'
            },
            {
                route: 'contact-detail/:id?',
                name: 'contactdetail',
                moduleId: '../contacts/contactDetail',
                nav: false,
                title: 'Contact Detail'
            }]);
        this.router = router;
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map