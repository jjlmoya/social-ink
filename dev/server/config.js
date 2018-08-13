const literals = require('./literals/panel');
const NavBarService = require('./services/navbar.service');
const WatchService = require('./services/business/watch.service');
const WatchDependencies = WatchService.dependences;


exports.db = function () {
    return {
        dbName: 'mocking',
        protocol: 'mongodb://',
        url: 'localhost:27017/'
    }
};

exports.server = function () {
    return {
        port: 3125
    }
};

exports.router = function () {
    return {
        home: {
            path: '/',
            view: 'home'
        },
        modal: {
            path: '/modal',
            view: 'modal'
        },
        bannerLand: {
            path: '/bannerland',
            view: 'bannerLand'
        },
        admin: {
            path: '/admin',
            view: 'admin/admin.hbs',
            navigation: {
                display: literals.titles.navigation,
                path: 'navegacion',
                services: {
                    read: [NavBarService.read],
                    readByID: NavBarService.readById
                },
                view: 'admin/navigation.hbs',
            },
            watch: {
                display: literals.titles.watch,
                path: 'relojes',
                services: {
                    read: [WatchService.read,
                        WatchDependencies.ColorsService.read,
                        WatchDependencies.MaterialsService.read,
                        WatchDependencies.CrownService.read,
                        WatchDependencies.BackCaseServices.read,
                        WatchDependencies.CoatingServices.read,
                        WatchDependencies.BrandService.read,
                        WatchDependencies.GenderService.read,
                        WatchDependencies.IlluminationService.read,
                        WatchDependencies.MechanismService.read,
                        WatchDependencies.DisplayService.read,
                        WatchDependencies.TimeFormatService.read,
                        WatchDependencies.TimeNumbersService.read,
                        WatchDependencies.WatchHandService.read,
                        WatchDependencies.CalendarService.read,
                        WatchDependencies.ClosureService.read
                    ]
                },
                view: 'admin/watch.hbs',
            }
        }
    }
};
