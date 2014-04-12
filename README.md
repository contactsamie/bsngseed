bsngseed
========

AngularJs - Bootstrap StartUp Web Project Based on Yeoman in Node


seting up process:


npm install -g yo


npm install -g generator-angular


------------------------------------------------------dev


npm install karma-jasmine --save-dev


npm install -g generator-jasmine


npm install karma-chrome-launcher --save-dev


grunt --force


grunt


-------------------------------------------------------


yo angular bsngseed


bower install angular-ui --save


bower install angular-ui-router --save


bower install angular-bootstrap --save


bower install angular-underscore-module --save


bower install ng-table --save


bower install angular-xeditable --save



-----------------------------------------------------APP.JS


```javascript
'use strict';
//docs 
//x-editable http://vitalets.github.io/angular-xeditable/
//app.run(function(editableOptions) {
//  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
//});
//ng table http://bazalt-cms.com/ng-table/
//ui router http://angular-ui.github.io/ui-router/
//ui bootstrap http://angular-ui.github.io/bootstrap/  (feel free to use anything from here)
//underscore module https://github.com/andresesfm/angular-underscore-module
//.controller('MyCtrl', function ($scope, _) {
//underscore http://blog.mohammedlakkadshaw.com/AngularJS_Underscore_ultimate_web_development.html#.U0mARvldWTo
angular
  .module('bsngseedApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'ui.router',
    'underscore',
    'ngTable',
    'xeditable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  .run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
  });

```
