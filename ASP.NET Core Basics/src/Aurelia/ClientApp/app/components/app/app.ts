import { Aurelia, PLATFORM } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Aurelia';
        config.map([{
            route: ['', 'home'],
            name: 'home',
            settings: { icon: 'home' },
            moduleId: PLATFORM.moduleName('../home/home'),
            nav: true,
            title: 'Home'
        }, {
            route: 'counter',
            name: 'counter',
            settings: { icon: 'education' },
            moduleId: PLATFORM.moduleName('../counter/counter'),
            nav: true,
            title: 'Counter'
        }, {
            route: 'fetch-data',
            name: 'fetchdata',
            settings: { icon: 'th-list' },
            moduleId: PLATFORM.moduleName('../fetchdata/fetchdata'),
            nav: true,
            title: 'Fetch data'
        },
        {
            route: 'contact-list',
            name: 'contactlist',
            settings: { icon: 'list-alt' },
            moduleId: PLATFORM.moduleName('../contacts/contactList'),
            nav: true,
            title: 'Contact List'
        },
        {
            route: 'contact-detail/:id?',
            name: 'contactdetail',
            moduleId: PLATFORM.moduleName('../contacts/contactDetail'),
            nav: false,
            title: 'Contact Detail'
        }]);

        this.router = router;
    }
}
