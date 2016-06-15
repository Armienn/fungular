"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_2 = require('@angular/http');
var app_component_1 = require('./app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_2.HTTP_PROVIDERS,
    core_1.provide(http_1.XHRBackend, { useClass: http_1.XHRBackend })
]);
//# sourceMappingURL=main.js.map